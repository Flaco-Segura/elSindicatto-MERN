import asyncHandler from 'express-async-handler'
import Disc from '../models/discModel.js'

// @desc    Fetch all discs
// @route   GET /api/discs
// @access  Public
const getDiscs = asyncHandler(async(req, res) => {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword
        ? { name: { $regex: req.query.keyword, $options: 'i' } }
        : {}

    const count = await Disc.countDocuments({...keyword})
    const discs = await Disc.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))

    res.json({discs, page, pages: Math.ceil(count / pageSize)})
})

// @desc    Fetch single disc
// @route   GET /api/discs/:id
// @access  Public
const getDiscById = asyncHandler(async(req, res) => {
    const disc = await Disc.findById(req.params.id)

    if (disc) {
        res.json(disc)
    } else {
        res.status(404)
        throw new Error('Disc not found')
    }
})

// @desc    Delete a disc
// @route   DELETE /api/discs/:id
// @access  Private/Admin
const deleteDisc = asyncHandler(async(req, res) => {
    const disc = await Disc.findById(req.params.id)

    if (disc) {
        await disc.remove()
        res.json({ message: 'Disc removed' })
    } else {
        res.status(404)
        throw new Error('Disc not found')
    }
})

// @desc    Create a disc
// @route   POST /api/discs/:id
// @access  Private/Admin
const createDisc = asyncHandler(async(req, res) => {
    const disc = new Disc({
        name: 'El Sindicatto',
        price: 0.00,
        user: req.user._id,
        image: '/images/elsindicatto.png',
        brand: 'El Sindicatto',
        category: 'El Sindicatto',
        countInStock: 0,
        numReviews: 0,
        format: 'LP'
    })

    const createdDisc = await disc.save()
    res.status(201).json(createdDisc)
})

// @desc    Update a disc
// @route   PUT /api/discs/:id
// @access  Private/Admin
const updateDisc = asyncHandler(async(req, res) => {
    const disc = await Disc.findById(req.params.id)

    if(disc) {
        disc.name = req.body.name || disc.name
        disc.price = req.body.price || disc.price
        disc.image = req.body.image || disc.image
        disc.brand = req.body.brand || disc.brand
        disc.category = req.body.category || disc.category
        disc.countInStock = req.body.countInStock || disc.countInStock
        disc.format = req.body.format || disc.format

        const updatedDisc = await disc.save()

        res.json(updatedDisc)
    } else {
        res.status(404)
        throw new Error('Disc not found')
    }
})

// @desc    Create new review
// @route   POST /api/discs/:id/reviews
// @access  Private
const createDiscReview = asyncHandler(async(req, res) => {
    const { rating, comment } = req.body

    const disc = await Disc.findById(req.params.id)

    if(disc) {
        const alreadyReviewed = disc.reviews.find(r => r.user.toString() == req.user._id.toString())

        if(alreadyReviewed) {
            res.status(400)
            throw new Error('Disc already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        disc.reviews.push(review)

        disc.numReviews = disc.reviews.length

        disc.rating = disc.reviews.reduce((acc, item) => item.rating + acc, 0) / disc.numReviews

        await disc.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Disc not found')
    }
})

// @desc    Get top rated discs
// @route   GET /api/discs/top
// @access  Public
const getTopDiscs = asyncHandler(async(req, res) => {
    const discs = await Disc.find({}).sort({ rating: -1 }).limit(3)

    res.json(discs)
})

export { getDiscs, getDiscById, deleteDisc, createDisc, updateDisc, createDiscReview, getTopDiscs }

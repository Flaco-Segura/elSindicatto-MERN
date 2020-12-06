import asyncHandler from 'express-async-handler'
import Disc from '../models/discModel.js'

// @desc    Fetch all discs
// @route   GET /api/discs
// @access  Public
const getDiscs = asyncHandler(async(req, res) => {
    const discs = await Disc.find({})

    res.json(discs)
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
        throw new Error('User not found')
    }
})

export { getDiscs, getDiscById, deleteDisc, createDisc, updateDisc }

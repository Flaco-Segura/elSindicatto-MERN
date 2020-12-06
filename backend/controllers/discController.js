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

export { getDiscs, getDiscById, deleteDisc }

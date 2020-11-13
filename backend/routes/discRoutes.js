import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Disc from '../models/discModel.js'

// @desc    Fetch all discs
// @route   GET /api/discs
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const discs = await Disc.find({})

    res.json(discs)
}))

// @desc    Fetch single disc
// @route   GET /api/discs/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const disc = await Disc.findById(req.params.id)

    if (disc) {
        res.json(disc)
    } else {
        res.status(404)
        throw new Error('Disc not found')
    }
}))

export default router
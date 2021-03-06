import express from 'express'
const router = express.Router()
import {
    getDiscs,
    getDiscById,
    deleteDisc,
    createDisc,
    updateDisc,
    createDiscReview,
    getTopDiscs
} from '../controllers/discController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getDiscs).post(protect, admin, createDisc)
router.get('/top', getTopDiscs)
router.route('/:id/reviews').post(protect, createDiscReview)
router.route('/:id')
    .get(getDiscById)
    .delete(protect, admin, deleteDisc)
    .put(protect, admin, updateDisc)

export default router
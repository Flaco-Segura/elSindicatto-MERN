import express from 'express'
const router = express.Router()
import {
    getDiscs,
    getDiscById,
    deleteDisc,
    createDisc,
    updateDisc,
    createDiscReview
} from '../controllers/discController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getDiscs).post(protect, admin, createDisc)
router.route('/:id')
    .get(getDiscById)
    .delete(protect, admin, deleteDisc)
    .put(protect, admin, updateDisc)
router.route('/:id/reviews').post(protect, createDiscReview)

export default router
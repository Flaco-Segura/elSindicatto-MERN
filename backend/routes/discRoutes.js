import express from 'express'
const router = express.Router()
import { getDiscs, getDiscById, deleteDisc } from '../controllers/discController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getDiscs)
router.route('/:id').get(getDiscById).delete(protect, admin, deleteDisc)

export default router
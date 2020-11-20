import express from 'express'
const router = express.Router()
import { getDiscs, getDiscById } from '../controllers/discController.js'

router.route('/').get(getDiscs)
router.route('/:id').get(getDiscById)

export default router
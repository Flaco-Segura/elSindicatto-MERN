import express from 'express'
const router = express.Router()
import { 
     addOrdersItems,
     getOrderById,
     updateOrderToPaid,
     getUserOrders
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrdersItems)
router.route('/myorders').get(protect, getUserOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
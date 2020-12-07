import express from 'express'
const router = express.Router()
import { 
     addOrdersItems,
     getOrderById,
     updateOrderToPaid,
     getUserOrders,
     getOrders
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrdersItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getUserOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
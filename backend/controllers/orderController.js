import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Disc from '../models/discModel.js'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrdersItems = asyncHandler(async(req, res) => {
    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body


    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc    Get orger by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getUserOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        let notAvailables = []

        await Promise.all(order.orderItems.map( async item => {
            const disc = await Disc.findById(item.disc)
            if (Number(item.qty) > disc.countInStock) {
                return notAvailables.push(disc.name)
            } else {
                disc.countInStock = disc.countInStock - Number(item.qty)
                disc.save()
            }
        }))

        if(notAvailables.length === 0) {
            order.isDelivered = true
            order.deliveredAt = Date.now()

            const updatedOrder = await order.save()

            res.json(updatedOrder)
        } else {
            res.status(400)
            throw new Error(`Not enough stock of: ${notAvailables.toString()}`)
        }
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export {
    addOrdersItems,
    getOrderById,
    updateOrderToPaid,
    getUserOrders,
    getOrders,
    updateOrderToDelivered
}

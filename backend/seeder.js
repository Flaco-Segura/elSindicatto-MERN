import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import discs from './data/discs.js'
import User from './models/userModel.js'
import Disc from './models/discModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Disc.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const sampleDiscs = discs.map(disc => {
            return { ...disc, user: adminUser }
        })

        await Disc.insertMany(sampleDiscs)

        console.log('Data Imported!'.green.inverse)
    } catch (error) {
        console.error(`${error}`.red.inverse)
        
    }
    process.exit()
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Disc.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
    process.exit()
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
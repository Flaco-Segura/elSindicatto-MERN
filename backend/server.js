import express from 'express'
import dotenv from 'dotenv'
import discs from './data/discs.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/discs/', (req, res) => {
    res.json(discs)
})

app.get('/api/disc/:id', (req, res) => {
    const disc = discs.find(p => p._id === req.params.id)
    res.json(disc)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

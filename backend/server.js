const express = require('express')
const discs = require('./data/discs')

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

app.listen(5000, console.log('Server running on port 5000'))

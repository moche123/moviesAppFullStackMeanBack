require('dotenv').config()
const express = require('express')
const app = express()
const { authenticateToken } = require('../helpers/token')
app.use(express.json())


const {
    getAllMovies
} = require('../controllers/movie.controller')

app.get('/movies',authenticateToken,getAllMovies)



module.exports = app
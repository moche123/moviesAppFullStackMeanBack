require('dotenv').config()
const express = require('express')
const app = express()
const { authenticateToken } = require('../helpers/token');
app.use(express.json())

const {
    signin,
    signup,
    logout
} = require('../controllers/user.controller')

app.post('/signin',signin)
app.post('/signup',signup)
app.post('/logout',authenticateToken,logout)

module.exports = app;

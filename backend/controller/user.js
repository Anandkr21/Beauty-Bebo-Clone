const express = require('express');
const { register, login, logout } = require('../routes/user.Routes');

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/logout', logout)

module.exports = { userRouter }
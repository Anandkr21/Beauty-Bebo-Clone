const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer'
    }
})

const userModel = new mongoose.model('user', userSchema)

module.exports = { userModel }
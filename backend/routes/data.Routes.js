const express = require('express')
const postRouter = express.Router()
const { postModel } = require('../model/data.model')
const {authentication} = require('../middlewares/authentication')
const {authorise} = require('../middlewares/authorise')

// C -> Create
postRouter.post('/create', authentication, async (req, res) => {
    const payload = req.body;
    const post = new postModel(payload)
    await post.save()
    res.send({ "msg": "product added" })
})

// R -> Read
postRouter.get('/', async (req, res) => {
    const users = await postModel.find()
    res.send(users)
})

// U -> Update
postRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        await postModel.findByIdAndUpdate({ _id: id }, payload)
        res.send({ 'msg': `Product with id: ${id} has been updated` })
    } catch (err) {
        res.send({ "msg": "somthing went wrong", "error": err.message })
    }
})

// D -> Delete
postRouter.delete('/delete/:id',  async (req, res) => {
    const id = req.params.id;
    await postModel.findByIdAndDelete({ _id: id })
    res.send({ 'msg': `Product with id: ${id} has been deleted` })
})


module.exports = {
    postRouter
}
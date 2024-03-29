const { postModel } = require('../model/data.model')

// C -> Create
exports.create = async (req, res) => {
    const payload = req.body;
    const post = new postModel(payload)
    await post.save()
    res.send({ "msg": "product added" })
}


// R -> Read
exports.alluser = async (req, res) => {
    const users = await postModel.find()
    res.send(users)
}


// U -> Update
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        await postModel.findByIdAndUpdate({ _id: id }, payload)
        res.send({ 'msg': `Product with id: ${id} has been updated` })
    } catch (err) {
        res.send({ "msg": "somthing went wrong", "error": err.message })
    }
}


// D -> Delete
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    await postModel.findByIdAndDelete({ _id: id })
    res.send({ 'msg': `Product with id: ${id} has been deleted` })
}


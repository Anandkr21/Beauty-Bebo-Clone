const express = require('express');
const postRouter = express.Router();
const { authentication } = require('../middlewares/authentication')
const { alluser, create, updateUser, deleteUser } = require('../routes/data.Routes')


postRouter.get('/alluser', authentication, alluser);
postRouter.post('/create', create);
postRouter.patch('/update/:id', updateUser);
postRouter.delete('/delete/:id', deleteUser);

module.exports = { postRouter }



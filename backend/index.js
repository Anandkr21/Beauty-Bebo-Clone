const express = require('express');

const { connection } = require('./config/db');
const { userRouter } = require('./controller/user');
const { postRouter } = require('./controller/data');

require('dotenv').config();

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err.message)
    }
    console.log(`Server is running at port http://localhost:${process.env.port}`);
})


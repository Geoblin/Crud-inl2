const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require('mongoose')

const todoRouter = require('./api/todo')



require('dotenv').config();
app.use(cors())
app.use(express.json())
app.use('/api', todoRouter);


mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true},
    console.log('Success! You are now connected to the database!')
)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
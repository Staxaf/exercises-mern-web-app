const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Mongodb connection established successfully')
})
app.use(cors()) // added new middleware
app.use(express.json()) // allows to parse json

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
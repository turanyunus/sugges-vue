require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const db = require('./helpers/db-connect')()
const verifyToken = require('./middlewares/verify-token')
let cors = require('cors')

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', authRouter)
app.use('/api', verifyToken)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// ENV
const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log('server is up and listening')
})

module.exports = app

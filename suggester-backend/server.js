require('dotenv').config()
require('./helpers/db-connect')()

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const userRoleRouter = require('./routes/user-role')
const categoryRouter = require('./routes/category')

const app = express()

// ADD CROS
let cors = require('cors');
app.use(cors());

// config
const config = require('./config');
app.set('api_secret_key',config.api_secret_key);



// middleware
//const verifyToken = require('./middlewares/verify-token');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', authRouter)
//app.use('/api', verifyToken)
app.use('/api/user', userRouter)
app.use('/api/user-role', userRoleRouter)
app.use('/api/category', categoryRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// ENV
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('server is up and listening || ', port)
})

module.exports = app

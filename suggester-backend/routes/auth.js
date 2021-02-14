const express = require('express')
const router = express.Router()

const { login, register, auth } = require('../controllers/auth')

/* auth page. */
router.get('/', auth)

//user login
router.post('/login', login)

// user register
router.post('/register', register)

module.exports = router

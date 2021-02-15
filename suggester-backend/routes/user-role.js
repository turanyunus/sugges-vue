const express = require('express')
const router = express.Router()

const {
    getAll,
    insert
} = require('../controllers/user-role')

//user get all
router.get('/getAll', getAll)

//user post
router.post('/insert', insert)

module.exports = router

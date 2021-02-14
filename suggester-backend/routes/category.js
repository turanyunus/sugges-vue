const express = require('express')
const router = express.Router()

const {
  getAll,
  insert,
  getById,
  update
} = require('../controllers/user')

//user get all
router.get('/getAll', getAll)

//user get by id
router.get('/getById/:id', getById)

//user post
router.post('/insert', insert)

//user put
router.put('/update', update)

module.exports = router

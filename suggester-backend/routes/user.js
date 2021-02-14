const express = require('express')
const router = express.Router()

const {
  getAll,
  insert,
  top10,
  getById,
  update
} = require('../controllers/user')

//user get all
router.get('/getAll', getAll)

//user get by id
router.get('/getById/:user_id', getById)

//user post
router.post('/insert', insert)

//user put
router.put('/update', update)

//user get top 10
router.get('/top10', top10)

module.exports = router

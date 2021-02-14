const user = require('../models/user-table')
const jwt = require('jsonwebtoken')

const auth = async (req, res) => {
  res.render('auth', { title: 'Express' })
}
const login = async (req, res) => {
  const { username, password } = req.body
  user.findOne({ username, password }, (err, user) => {
    if (err) throw err

    if (!user) {
      res.json({
        status: false,
        message: 'Böyle bir kullanıcı bulunamadı.'
      })
    } else {
      const payload = { username }

      const token = jwt.sign(payload, req.app.get('api_secret_key'), {
        expiresIn: '12h'
      })

      res.json({
        status: true,
        token: token
      })
    }
  })
}
const register = async (req, res) => {
  const users = new user(req.body)
  const promise = users.save()
  promise
    .then(() => {
      res.json({
        status: true
      })
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  auth,
  login,
  register
}

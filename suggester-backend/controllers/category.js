const category = require('../models/category-table')

const getAll = async (req, res) => {
  const promise = category.find({})
  promise
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
}
const insert = async (req, res) => {
  const categories = new category(req.body)

  const promise = categories.save()
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
const update = async (req, res) => {
  const promise = category.findByIdAndUpdate(req.params.id, req.body, {
    new: true //güncellenmiş datanın gelmesini istersem
  })

  promise
    .then((category) => {
      if (!category) {
        next({ message: 'Kullanıcı bulunamadı.', code: 100 })
      } else res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
}
const getById = async (req, res) => {
  const promise = category.findById(req.params.id)
  promise
    .then((category) => {
      if (!category) {
        next({ message: 'Kullanıcı bulunamadı.', code: 100 })
      } else res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  getAll,
  insert,
  update,
  getById
}

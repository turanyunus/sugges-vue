const userRole = require('../models/user-role-table')

const getAll = async (req, res) => {
    const promise = userRole.find({})
    promise
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
}
const insert = async (req, res) => {
    const users = new userRole(req.body)
    console.log(users)
    const promise = users.save()
    promise
        .then((data) => {
            res.json({
                status: true
            })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = {
    getAll,
    insert
}

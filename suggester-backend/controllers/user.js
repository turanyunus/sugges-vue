const user = require('../models/user-table')

const getAll = async (req, res) => {
  const promise = user.find({})
  promise
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
}
const insert = async (req, res) => {
    const users = new user(req.body)
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
const update = async (req, res) => {
    const promise = user.findByIdAndUpdate(
        req.params.user_id,
        req.body,
        {
            new : true //güncellenmiş datanın gelmesini istersem
        });

    promise.then((user)=> {
        if(!user){
            next({message: 'Kullanıcı bulunamadı.', code : 100});
        }else
            res.json(user);

    }).catch((err)=>{
        res.json(err);
    });
}
const top10 = async (req, res) => {
  const promise = user.find({}).limit(10).sort([createdOn, -1]) //Sort by Date Added DESC

  promise
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
}
const getById = async (req, res) => {
  const promise = user.findById(req.params.user_id)

  promise
    .then((user) => {
      if (!user) {
        next({ message: 'Kullanıcı bulunamadı.', code: 100 })
      } else res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
    getAll,
    insert,
    update,
    top10,
    getById
}

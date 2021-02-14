const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect(
      'mongodb+srv://MyBlogDB:MyBlogDB123.@myblogdb-u6omf.mongodb.net/MyBlogDB?retryWrites=true&w=majority',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then()

  mongoose.connection.on('open', () => {
    console.log('MongoDb Connected')
  })

  mongoose.connection.on('error', (err) => {
    console.log('MongoDb Error', err)
  })

  mongoose.Promise = global.Promise
}

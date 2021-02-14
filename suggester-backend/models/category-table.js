const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, '`{PATH}` alanı zorunludur'],
    maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
    minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
    unique: true
  },
  mainCategory: {
    type: Number,
    required: true,
    default: 0
  },
  subCategory: {
    type: Number,
    required: true,
    default: 0
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  createdBy: Schema.Types.ObjectId
})

module.exports = mongoose.model('category', CategorySchema)

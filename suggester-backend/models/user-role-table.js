const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRoleSchema = new Schema({
    name: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        unique: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    createdBy: Schema.Types.ObjectId
})

module.exports = mongoose.model('user-role', UserRoleSchema)

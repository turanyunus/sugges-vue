const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type:String,
        required:[true,'`{PATH}` alanı zorunludur'],
        maxlength:[30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength:[2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
    },
    surname : {
        type:String,
        required:[true,'`{PATH}` alanı zorunludur'],
        maxlength:[30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength:[2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
    },
    username : {
        type:String,
        required:[true,'`{PATH}` alanı zorunludur'],
        maxlength:[30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength:[2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        unique:true
    },
    password : {
        type:String,
        required:[true,'`{PATH}` alanı zorunludur'],
        maxlength:[30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength:[6, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        unique:true
    },
    email : {
        type:String,
        required:[true,'`{PATH}` alanı zorunludur'],
        maxlength:[30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength:[2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        unique:true
    },
    birthDate : {
        type:Date,
        min:1940,
        max:2040
    },
    imageURL : {
        type:String
    },
    role : {
        type:Number,
        default:0
    },
    createdOn : {
        type:Date,
        default:Date.now()
    },
    createdBy: Schema.Types.ObjectId,
    updatedOn : {
        type:Date
    },
    updatedBy: Schema.Types.ObjectId

});

module.exports = mongoose.model('user',UserSchema);

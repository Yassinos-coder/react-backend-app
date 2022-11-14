const { default: mongoose } = require('mongoose')
const db = require('mongoose')

const user = db.Schema({
    username : {
        type: String,
        required : true,
        unique: true
    },
    passswd : {
        type: String,
        required : true
    },
    firstname : {
        type: String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },   
})

const UserModel = mongoose.model('Users', user)

module.exports = UserModel
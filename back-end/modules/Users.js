const {  mongoose } = require('mongoose')
const db = require('mongoose')

const Users = db.Schema({
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
    username : {
        type: String,
        required : true,
        unique: true
    },
    passwd : {
        type: String,
        required : true
    }
})

const UserModel = mongoose.model('Users', Users)

module.exports = UserModel
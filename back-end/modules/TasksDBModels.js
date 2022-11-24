const mongoose  = require('mongoose')
const db = require('mongoose')
const date = new Date().toLocaleString("fr-MA", {day : '2-digit', month: 'numeric',year:'numeric'})
const task = db.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    Task: {
        type: String,
        required: true,
    },
    achieved: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: String,
        default : date
    }
})

const TaskModel = mongoose.model('Users_Tasks', task)
module.exports = TaskModel

const { mongoose } = require('mongoose')
const db = require('mongoose')

const task = db.Schema({
    username : {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true,
    },
    achieved: {
        type: String
    },
    creationDate: {
        type: String,
    }
})

const TaskModel = mongoose.model('Users_Tasks', task)
module.exports = TaskModel

const { default: mongoose } = require('mongoose')
const db = require('mongoose')

const task = db.Schema({
    task: {
        type: String,
        required: true,
    },
    achieved: {
        type: String
    },
    creation_date: {
        type: String,
        required: true
    }
})

const TaskModel = mongoose.model('UsersTasks', task)

module.exports = TaskModel

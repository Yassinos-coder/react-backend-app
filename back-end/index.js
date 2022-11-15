const express = require("express")
const cors = require("cors")
const mongoose  = require("mongoose")
const app = express()
const UserRouter = require('./APIs/user')
const TaskManager = require('./APIs/tasks')

app.use(express.json())
app.use(cors())
app.use(UserRouter)
app.listen(9000, ()=> console.log('Server is up and running on port 9000'))
//mongoose.connect('mongodb+srv://zeus:1234@cluster0.z9ikdbp.mongodb.net/Todos', ()=> console.log('DB connection granted'))
mongoose.connect('mongodb://localhost/Todos', ()=> console.log('DB connection granted'))
app.use(UserRouter) // User Management APIs
app.use(TaskManager) // Tasks Management APIs
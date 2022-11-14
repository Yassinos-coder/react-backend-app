const express = require("express")
const cors = require("cors")
const mongoose  = require("mongoose")
const app = express()
const UserRouter = require('./APIs/user')

app.use(express.json())
app.use(cors())
app.use(UserRouter)
app.listen(9000, ()=> console.log('Server is up and running on port 9000'))
mongoose.connect('mongodb://localhost/Todos').then(console.log('Connection Granted'))

let accounts = []

let tasks = [
    {
        task: 'Do Something',
    },
    {
        task: 'Pay th bills',
    },
    {
        task: 'Rest',
    }
]

app.get('/SendTasksList', (req, res)=>{
    res.send(tasks)
})

app.post('/addTodoToTasks', (req, res)=> {
    const task = req.body
    tasks.push(task)
    res.send(tasks)
})

app.delete('/deleteTask/:task' , (req, res) =>{
    const task_to_delete = req.params.task
    const filtered_tasks = tasks.filter((element) => element.task !== task_to_delete)
    tasks = filtered_tasks
    res.send(tasks)
    console.log(filtered_tasks)
    console.log(tasks)
})

app.post('/AddAccount' ,(req,res) => {
    const account_data = req.body
    accounts.push(account_data)
    console.log(accounts)
})

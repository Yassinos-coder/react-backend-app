const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.listen(9000, ()=> console.log('Server is up and running on port 9000'))
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
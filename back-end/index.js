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
        task: 'Do Something',
    },
    {
        task: 'Do Something',
    },
    {
        task: 'Do Something',
    }
]

app.get('/SendTasksList', (req, res)=>{
    res.send(tasks)
})


app.post('/addTodo', (req, res) => {
    const task = req.body
    console.log(task)
    tasks.push(task)
    res.send(tasks)
})
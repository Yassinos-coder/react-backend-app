const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.listen(9000, ()=> console.log('Server is up and running on port 9000'))

let tasks = [
    {
        id: 1,
        task: 'Do Something',
    },
    {
        id: 2,
        task: 'Do Something',
    },
    {
        id: 3,
        task: 'Do Something',
    },
    {
        id: 4,
        task: 'Do Something',
    }
]

app.get('/SendTasksList', (req, res)=>{
    res.send(tasks)
})


app.get('/AddTodo', (req, res) => {
    list.push( { id : id+1, task: ""})
    res.send(tasks)
})
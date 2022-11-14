const {Router} = require('express')

const router = Router ()

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

router.get('/SendTasksList', (req, res)=>{
    res.send(tasks)
})

router.post('/addTodoToTasks', (req, res)=> {
    const task = req.body
    tasks.push(task)
    res.send(tasks)
})

router.delete('/deleteTask/:task' , (req, res) =>{
    const task_to_delete = req.params.task
    const filtered_tasks = tasks.filter((element) => element.task !== task_to_delete)
    tasks = filtered_tasks
    res.send(tasks)
    console.log(filtered_tasks)
    console.log(tasks)
})





module.exports= router
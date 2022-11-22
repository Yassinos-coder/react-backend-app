const {Router} = require('express')
const TaskModel = require('../modules/TasksDBModels')
const router = Router ()


router.get('/SendTasksList/:username', async (req, res)=>{
    let task_of_username = req.params.username
    try {    
        const task_w_user = await TaskModel.find({task_of_usr:task_of_username})
        res.send(task_w_user)
    }catch(err) {console.error(err)}

})

router.post('/addTodoToTasks/:username', async (req, res)=> {
    let task_of_username = req.params.username
    const task_w_user = await TaskModel.find({task_of_usr:task_of_username})
    let TaskExists;
    const task = req.body
    console.log(task)
    try{
        let result = await TaskModel.findOne({task :task})
        if (result) {
            TaskExists = true
            res.send('Task Already Exists')
            console.log('Task Already Exists')
        } else {
            console.log(task_of_username)
            const taskToadd = new TaskModel({task_of_usr: task_of_username ,task:task})
            taskToadd.save()
            res.send(task_w_user)
        }

    }catch(err) {console.error(err)}

})

router.delete('/deleteTask/:username/:task' , async (req, res) =>{
    const task_to_delete = req.params.task
    const task_of_username = req.params.username
    try {
        let result = await TaskModel.findOne
    }catch(err) {console.error(err)}
    tasks = filtered_tasks
    res.send(tasks)
    // console.log(filtered_tasks)
    // console.log(tasks)
})





module.exports= router
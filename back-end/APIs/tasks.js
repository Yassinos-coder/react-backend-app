const {Router} = require('express')
const TaskModel = require('../modules/Tasks')
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
    try{
        let result = await TaskModel.findOne({task :task})
        if (result) {
            TaskExists = true
            res.send('Task Already Exists')
            console.log('Task Already Exists')
        } else {
            const taskToadd = new TaskModel({task_of_usr: task_of_username ,task:task})
            taskToadd.save()
            res.send(task_w_user)
        }

    }catch(err) {console.error(err)}

})

router.delete('/deleteTask/:username/:task' , (req, res) =>{
    const task_to_delete = req.params.task
    const filtered_tasks = tasks.filter((element) => element.task !== task_to_delete)
    tasks = filtered_tasks
    res.send(tasks)
    // console.log(filtered_tasks)
    // console.log(tasks)
})





module.exports= router
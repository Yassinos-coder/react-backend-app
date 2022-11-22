const {Router} = require('express')
const TaskModel = require('../modules/TasksDBModels')
const router = Router ()


router.get('/SendTasksList/:userid', async (req, res)=>{
    let task_of_userid = req.params.userid
    try {    
        const task_w_user = await TaskModel.find({user_id:task_of_userid})
        res.send(task_w_user)
    }catch(err) {console.error(err)}

})

router.post('/addTodoToTasks/:userid', async (req, res)=> {
    let task_of_userid = req.params.userid
    const task_w_user = await TaskModel.find({user_id:task_of_userid})
    let TaskExists;
    const Task = req.body.Task
    console.log(Task)
    try{
        let result = await TaskModel.findOne({Task : Task})
        if (result) {
            TaskExists = true
            res.send('Task Already Exists')
            console.log('Task Already Exists')
        } else {
            console.log(task_of_userid)
            const taskToadd = new TaskModel({user_id: task_of_userid ,Task:Task})
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
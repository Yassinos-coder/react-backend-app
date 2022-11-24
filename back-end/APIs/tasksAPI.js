const {Router} = require('express')
const TaskModel = require('../modules/TasksDBModels')
const router = Router ()


router.get('/SendTasksList/:userid', async (req, res)=>{
    let task_of_userid = req.params.userid
    try {    
        const TasksofUsr = await TaskModel.find({user_id: task_of_userid})
        res.send(TasksofUsr)
    }catch(err) {console.error(err)}

})

router.post('/addTodoToTasks/:userid', async (req, res)=> {
    let task_of_userid = req.params.userid
    const Task = req.body.Task
    try{
        let result = await TaskModel.findOne({Task : Task})
        if (result) {
            res.send('Task Already Exists')
            console.log('Task Already Exists')
        } else {
            const taskToadd = new TaskModel({user_id: task_of_userid ,Task:Task})
            let sendNewTask = await taskToadd.save()
            const TasksofUsr = await TaskModel.find({user_id: task_of_userid})
            res.send(TasksofUsr)
        }

    }catch(err) {console.error(err)}

})

router.delete('/deleteTask/:userid/:task' , async (req, res) =>{
    const task_to_delete = req.params.task
    const task_of_userid = req.params.userid
    try {
        let result = await TaskModel.findOne({user_id:task_of_userid ,Task:task_to_delete})
        if (result) {
          let deleter = await TaskModel.deleteOne({user_id: task_of_userid, Task:task_to_delete})
          const TasksofUsr = await TaskModel.find({user_id: task_of_userid})
          res.send(TasksofUsr)
        } else {
            console.log('Task do not exist')
            res.send('Task doesn\'t exist')
        }
    }catch(err) {console.error(err)}
})





module.exports= router
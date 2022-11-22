const {Router} = require('express')
const UserModel = require('../modules/UsersDBModels')

const router = Router ()
let userDoesExists;

router.post('/AddAccount' , async (req,res) => {
    let account_data = req.body 
    try{
    let result = await UserModel.findOne({username: account_data.Username})
    if (result) {
        userDoesExists=true
        res.send(userDoesExists)
        console.log('User Already Exists')
    } else {
        const newUser = new UserModel(
            {
                firstname: account_data.Firstname,
                lastname: account_data.Lastname,
                username: account_data.Username,
                email: account_data.Email,
                passwd: account_data.Password,

            }
        )
        newUser.save()
    }
    }catch(err) {console.error(err.message)}
})

router.post('/Signin', async (req,res)=> {
    let credentials = req.body
    try {
    let user_existence_result = await UserModel.findOne({username: credentials.uname,passwd: credentials.passwd})
    let userData = await UserModel.findOne({username: credentials.uname})
    if (user_existence_result) {
        res.send(userData._id)
        console.log('Access Granted')

    } else {
        res.send(false)
        // console.log('Access Rejected')
    }
    }catch(err) {
        console.error(err.message)
    }

})

router.get('/getUserData/:username' , async (req, res) =>{
    let username_ls = req.params.username
    try {  
        const userData = await UserModel.findOne({username: username_ls})
        res.send(userData)
    }catch(err) {console.log(err)}
})

module.exports= router
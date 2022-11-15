const {Router} = require('express')
const UserModel = require('../modules/Users')

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

module.exports= router
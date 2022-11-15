const {Router} = require('express')
const UserModel = require('../modules/Users')

const router = Router ()




router.post('/AddAccount' ,(req,res) => {
    const account_data = req.body
    const User = new UserModel({
        username: account_data.Username, 
        passwd: account_data.Password,
        firstname: account_data.Firstname,
        lastname: account_data.Lastname,
        email: account_data.Email
    })
    console.log(account_data.Email)
    User.save()
})

module.exports= router
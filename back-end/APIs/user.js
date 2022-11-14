const {Router} = require('express')

const router = Router ()


let accounts = []


router.post('/AddAccount' ,(req,res) => {
    const account_data = req.body
    accounts.push(account_data)
    console.log(accounts)
})

module.exports= router
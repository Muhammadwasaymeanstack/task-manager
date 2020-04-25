const express = require('express')
const jwt = require('jsonwebtoken')
// const {} = require('./keys')
const router = new express.Router()
const User = require('./model')

/// signup
router.post('/index',async (req,res)=>{
    const user = new User(req.body)
  
    try{
        await user.save()
        res.send(user)
        
    }
    
    catch(e){
        res.status(401).send()
    }

})
  // const token = jwt.sign({userId:user._id},'abcdefg')
    // console.log(token)
//Sign In User
router.post('/login',async (req,res)=>{

    try{
            const user = await User.findByCredentials(req.body.email,req.body.password)
            console.log(user)
            res.send(user)
    }
    catch(e){
        res.status(404).send(e)
    }

})


module.exports = router
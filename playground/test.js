const express = require('express')
require('./db')
const bcrypt = require('bcryptjs')
const userRouter = require('./router')


const app = express()
const port = process.env.PORT || 3000 

app.use(express.json()) 

app.use(userRouter)


app.listen(port,()=>{
    console.log('server is up on port '+ port)
})
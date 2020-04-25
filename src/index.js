    const express = require('express')
    require('./db/mongoose')
    const userRouter = require('../src/routers/user')
    const taskRouter = require('./routers/task')
    const bcrypt = require ('bcryptjs')
  
    const app = express()   //*** starting Express */
    const port = process.env.PORT || 3000 //***setting Port */

    app.use(express.json())   

 
app.post('/test', (req,res)=>{

    
    const password =  req.body
        
    bcrypt.hash(password,8,(err,hashed) => {
        if(err){
            return err
        }
        console.log(hashed)
       res.send(hashed)
    })
})
    // bcrypt.compare(password,hashed,(err,decoded) => {
    //     if(err){
    //         return err
    //     }
    //     console.log(decoded)
    //     res.send(decoded)
    // })
    // })
    
   



        // const password ="asadcd"
          
        // bcrypt.hash(password,8,(err,hashed)=>{
        //     if(err){
        //         return err
        //     }
       
        //     console.log(hashed)
        //     bcrypt.compare(password,hashed,(err,decoded)=>{
        //         if(err){
        //             return err
        //         }
             
        //         console.log(decoded)
        //     })
        // })


   

     
    
  
    

    // app.use((req,res,next)=>{
    //      if(req.method === 'GET'){
    //          res.send('Get req are disabled')
    //      }
    //      else{a
    //         next()
    //      }
            
    // })

    app.use((req,res,next)=>{
        res.status(503).send('Service is unavailable')
    })

    app.use(express.json())     //*****formating into json  */
    // ********Routers******/
    app.use(userRouter)
    app.use(taskRouter)
    

    app.listen(port, () => console.log(`Server is Up on port ${port}...!` ))


    // const jwt = require('jsonwebtoken')

    // const myFunction = async ()=>{
    //     const token = jwt.sign({_id:'abc123'},'thisisme',{expiresIn:'1 min'})
    //     console.log(token)
    //     const verify = jwt.verify(token,'thisisme')
    //     console.log(verify)
    // }
    // myFunction()
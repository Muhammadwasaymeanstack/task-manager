const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

    
    //************Task***************/



    router.post('/task',async(req,res)=>{
 

        const task = await new Task(req.body)

        try{
            task.save()
            res.status(201).send(task)
        }
        catch{
            res.status(400).send(e)
        }
    })

    router.get('/task',async (req,res)=>{

        try{
            const task = await Task.find({})
            res.send(task)
        }

        catch(e){
            res.status(500).send(e)
        }
    })

    router.get('/task/:id',async(req,res)=>{

        const _id = req.params.id
        try{
            const task = await Task.findById(_id)
            if(!task){
                res.status(404).send()
            }
            res.send(task)
        }   

        catch(e){
            res.status(500).send(e)
        }
    })

    router.patch('/task/:id',async(req,res)=>{
            const updates=Object.keys(req.body)
            const allowdUpdates =['description','completed']
            const isValidUpadte =updates.every((update)=>allowdUpdates.includes(update))
            if(!isValidUpadte){
                res.status(404).send({error:'Invalid Updates'})
            }

        try{

            const updateTask = await Task.findById(req.params.id)
            updates.forEach((update)=> updateTask[update] = req.body[update])
           
            updateTask.save()
        
            // const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
            if(!updateTask){
                res.status(404).send()
            }
            res.send(updateTask)
        }
        catch(e){
            res.status(400).send('Invalid request')
        }
    })  

    router.delete('/task/:id',async(req,res)=>{

        try{
            const task = await Task.findByIdAndDelete(req.params.id)
            if(!task){
                res.status(404).send()
            }
            res.send(task)
        }
        catch(e){
            res.status(500).send()
        }
    })

    module.exports = router
require('../db/mongoose')
const Task = require('./task')

// Task.findByIdAndRemove('5e909bb867d14227408587d9').then(()=>{
//                 console.log(Task)
//                 return Task.countDocuments({completed : true})
// }).then((update)=>{
//                 console.log(update)
// }).catch((e)=>{
//                 console.log(e)
// })


const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed:true})
    return count
}

deleteTaskAndCount('5e909c3167d14227408587da').then((count)=>{
        console.log(count)
}).catch((e)=>{
    console.log(e)
})

//CRUD cread read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')
// const id = new ObjectID()

// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true , useNewUrlParser: true }, (error,client)=>{
    if(error){
        console.log('unable to connect the database!')
    } 
    const db = client.db(databaseName)
    db.collection('tasks').deleteMany({
        "task" : "Run"
    }).then((success)=>{
            console.log('Msg:',success)
        }).catch((error)=>{
            console.log('Msg:',error)
        })
})


    //*******toInsert Document*****//
    // db.collection('users').insertOne({
    //     _id: id,
    //     name :'wajid',
    //     age :24
    // },(error, result)=>{
    //     if(error){ 
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    //***toFind Document****/
    // db.collection('users').findOne({_id:new ObjectID("5e8463c830a1061e40d11539")},(error,user)=>{
    //     if(error){
    //         return console.log('unable to find document')
    //     }
    //     console.log(user)

    // })
    // db.collection('users').find({'age':22}).toArray((error,users)=>{
    //     if(error){
    //                 return console.log('unable to find documents')
    //             }
    //             console.log(users)
    // })


    // db.collection('tasks').insertMany([{
    //     complete : false,
    //     task:'Run'
    // },
    // {
    //     complete: true,
    //     task:'write'
    // }
    //         ],(error,result)=>{
    //             if(error){
    //              return   console.log('unable to insert')
    //             }
    //             console.log(result.ops)
    //         })

            // db.collection('tasks').find({complete: true}).toArray((error,tasks)=>{
            //     if(error){
            //         console.log('unable')
            //     }
            //     console.log(tasks)
            // })
            //***toUpdate field****/
// db.collection('users').updateOne({
//         _id: new ObjectID("5e839b4b48cc4220a81afddf")
//     },{
//         $inc:{
//             age: 2
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })


//*******upDateMany Fields****//

// db.collection('tasks').updateMany({
//     complete: false
// },
// {
//     $set:{
//         complete : true
//     }
// }).then((success)=>{
//     console.log('Msg:',success)
// }).catch((error)=>{
//     console.log('Msg:',error)
// })
    //****DeleteMany ***** */

   
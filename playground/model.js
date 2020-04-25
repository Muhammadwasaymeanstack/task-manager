const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        required:true,
        unique:true,
        trim:true,
        lowerCase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('It cannot contain "password"')
            }
        }
        
    }

})
//login 
userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('No user')
    }
    const isMatch = await bcrypt.compare( password ,user.password)
    console.log(isMatch)
    // if(!isMatch){
    //     throw new Error('invalid')
    // }
    
    console.log(user)
     return user
    }

//hashing
userSchema.pre('save', async function (next){
    const user = this 
   
    if(user.isModified('password')){
        user.password = await bcrypt.hash('user.password',8)
    }
    // console.log(user.password)
    next()
})

const User = mongoose.model('nUser',userSchema)

module.exports = User
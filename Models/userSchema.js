
//1 import mongoose
const mongoose = require('mongoose')


//schema creation
const userSchema = new mongoose.Schema({
   username:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true
   },
   password:{
    type:String,
    require:true
   },
   github:{
    type:String,
   },
   linkedIn:{
    type:String,
   
   },
   profilePic:{
    type:String,
   
   }
})

//3 model creation/extract same as mongodb collection
const users = mongoose.model('users',userSchema)

module.exports=users
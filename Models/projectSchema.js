
//1 import mongoose
const mongoose = require('mongoose')


//schema creation
const projectSchema = new mongoose.Schema({
   title:{
    type:String,
    require:true
   },
   language:{
    type:String,
    require:true
   },
   github:{
    type:String,
    require:true
   },
   website:{
    type:String,
    require:true
   },
   overview:{
    type:String,
    require:true
   
   },
   projectImg:{
    type:String,
    require:true
   },
   userId:{
    type:String,
   }
})

//3 model creation/extract same as mongodb collection
const projects = mongoose.model('projects',projectSchema)

module.exports=projects
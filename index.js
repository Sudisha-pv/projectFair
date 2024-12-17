//1 load .env file
require('dotenv').config() //load .env file contents into process .env by default

//6 import cors
const cors = require('cors')
//8  import db
const db=require('./DB/connection')

//
const router = require('./Routes/router')

// const ApplictionMiddleWare = require('./Middlewares/ApplicationMiddleWare')


//2 import express
const express = require('express')
//3 create an appliction using express
const projectFairApp = express()

//7 middileware configuration
projectFairApp.use(cors())
projectFairApp.use(express.json())
// projectFairApp.use(ApplictionMiddleWare)

projectFairApp.use(router)

//export image to frontend
projectFairApp.use('/uploads',express.static('./uploads'))

// Sudisha_Pv
//Project_fair






//4 port creation 
const PORT = 4000 || process.env.PORT
//5 server run
projectFairApp.listen(PORT,()=>{
   console.log("serverApp running on port" + PORT);
   
})


projectFairApp.get('/',(req,res)=>{
   res.send("welcome to project fair")
})

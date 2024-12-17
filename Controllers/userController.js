const mongoose = require('mongoose')

const users = require('../Models/userSchema');

const jwt = require('jsonwebtoken')


//register logic
exports.registerAPI = async(req,res) =>{
   console.log("inside Register API");
   const {username,email,password}=req.body;
   //if user already in db
   const exitingUser =  await users.findOne({email})
       if(exitingUser){
        res.status(402).json({message:"user already extiing"})
       }
    else{
      const newUser = new users( {
        username:username,
        email:email,
        password:password,
        github:"",
        linkedIn:"",
        profilePic:""

      })
      //to save the deatails in mongodb
      await newUser.save()
      res.status(200).json("user registerd successfull...")
    }
  }





//login logic
exports.loginAPI = async(req,res) =>{
   console.log("inside login API");
   const {email,password}=req.body;
   //if user already in db

   
   try{
    const exitingUser =  await users.findOne({email,password})
    if(exitingUser){
        

          const token = jwt.sign({userId:exitingUser._id},process.env.jwtKey)
          console.log(token);
          
          res.status(200).json({currentUeser:exitingUser,token})
         }
      else{
        res.status(404).json("incorrect email or password")
         }
   }
   catch(err){
    res.status(401).json(err)
   }
   
  }



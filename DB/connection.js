//1 import mongoose
const mongoose = require('mongoose')
//get coonectionString
const connectionString = process.env.connectionString
//3 define define connection
mongoose.connect(connectionString).then(res=>{
   console.log("project server with mongoo db");
   
}).catch(err=>{
 console.log("error",+err);
 
})
const projects = require('../Models/projectSchema');

exports.addprojectAPI=async(req,res)=>{
  console.log("inside add projectAPI");
  
  const {title,language,github,website,overview} = req.body
  const projectImg = req.file.filename//from multetmedia
  const userId = req.payload //from jwt middleware
  console.log(projectImg);
  
  console.log({title,language,github,website,overview,userId});
  

try {
  const project = await projects.findOne({github})
  if(project){
    res.status(401).json("project already exsting")
  }
  else{
    const newProject = new projects({title,language,github,website,overview,projectImg,userId})
    await newProject.save()
    res.status(200).json(newProject)

  }
} catch (error) {
  res.status(406).json("error",err)
}
}


exports.getHomeProjectAPI=async(req,res)=>{
  try {
    const response = await projects.find().limit(3)
    res.status(200).json(response)
 } catch (err) {
     res.status(406).json(err)
 }
}





exports.getUserProjectAPI=async(req,res)=>{
  const userId =req.payload
    try {
      const response = await projects.find({userId})
      res.status(200).json(response)
    } catch (err) {
      res.status(406).json(err)
    }
}




exports.getAllUserProjectAPI=async(req,res)=>{
 try {
    const response = await projects.find()
    res.status(200).json(response)
 } catch (err) {
     res.status(406).json(err)
 }
    
}




exports.editProjectAPI=async(req,res)=>{
  console.log("inside edit projectAPI");
  
  const {title,language,github,website,overview,projectImg} = req.body
  const updateImg = req.file? req.file.filename :projectImg//from multetmedia
  const userId = req.payload //from jwt middleware
  const {projectId}= req.params
  console.log(updateImg);
  console.log({title,language,github,website,overview,userId});

  try {
  
    const project = await projects.findByIdAndUpdate(
      {_id:projectId},
      {
        title:title,
        language:language,
        github:github,
        website:website,
        overview:overview,
        projectImg:updateImg
      }
    )
    await project.save()
    res.status(200).json(project)

    
  } catch (err) {
     console.log(err);
     
  }
  
}


exports.deleteProjectAPI=async(req,res)=>{
  console.log("inside delete API");
  const {projectId}= req.params
  console.log(projectId);
  
  try {
    const project = await projects.findByIdAndDelete({_id:projectId})
  if(!project){
   res.status(404).json({message:"not found"})
    
  }else{
    res.status(200).json({message:"successsful"})
  }
    
  } catch (error) {
    console.log(error);
    
  }
  
}

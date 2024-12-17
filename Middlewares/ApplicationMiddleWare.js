const ApplictionMiddleWare = (req,res,next)=>{
  console.log("inside applictionMiddleWare ");
  next();
}
module.exports= ApplictionMiddleWare
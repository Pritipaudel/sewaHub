const jwt = require("jsonwebtoken");
const User = require("../../model/userModel");
const bcrypt =require('bcryptjs');
require('dotenv').config();


const userLogin = async(req,res)=>{
    const{userGmail,password}=req.body;
    if(!userGmail|!password){
       return res.status(400).json({
            message:"please provide username and password "
        })
    }
   const userchecking=await User.find({userGmail:userGmail})
   if(userchecking.length==0){
    return res.status(400).json({
        message:"Provided gmail not found"
    })
   }
//    password check
const isMatched = bcrypt.compareSync(password,userchecking[0].password)
if(isMatched){
    console.log("SECRET_KEY:", process.env.SECRET_KEY);  // Make sure it's correctly set

    const token = jwt.sign({id:userchecking[0]._id},process.env.SECRET_KEY,
        {
           expiresIn : '10d'
       });
    res.status(200).json({
        message:"login sucessfully",
        token,
        role:userchecking[0].role,
        userId:userchecking[0]._id,

    })
}
else{
    res.status(400).json({
        message:"invalid password"
    })
}
}
module.exports =userLogin
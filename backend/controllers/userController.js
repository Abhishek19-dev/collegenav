const express = require('express')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');

//register a user
exports.registerUser =  async(req,res,next)=>{

    // const {name , email , password , confirmPassword , avatar} = req.body;
    const {name , email , password , confirmPassword} = req.body;
     
   if(password !== confirmPassword){
    res.status(401).json({
        success : "false",
        message :"Password Do Not Match"
    })
   }

    const user = await User.create({
        name,email,password,confirmPassword
    })
    
    sendToken(user , 200 ,res)
}


//Login a User :-
exports.LoginUser = async(req,res,next)=>{
    const {email,password} = req.body

    if(!email && !password)
    {
        res.status(401).json({
            success : "false",
            message :"Enter Email and password"
        })
    }
    const user = await User.findOne({"email":email}).select("+password")
    

    if(!user){
        res.status(401).json({
            success : "false",
            message :"User is Not Registered"
        })
    }
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched)
    {
        res.status(401).json({
            success : "false",
            message :"Invalid Email and Password"
        })
    }
    sendToken(user,200,res)
}

//Logout a User:-
exports.LogoutUser = async(req,res,next)=>{
   await res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly : true
    })
    res.status(200).json({
        success:true,
        message:"LOGGED OUT SUCCESSFULLY !"
    })
}



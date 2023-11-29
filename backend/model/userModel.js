const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const {Schema} = mongoose

const userSchema = new Schema({
    name : {
        type:String,
        required:[true,"Please Enter Your Name"]
    },
    email :{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate : {
            validator: (value) => validator.isEmail(value) && value.endsWith('@mail.jiit.ac.in'),
            message: "Please Enter a valid College Email Id",
        },
        },
    password : {
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength : [8,"Password should be minimum of 8 word"]
    },
  
},{
    timestamps : true,
})


//Encryption password
// pre :- executing this before save 
userSchema.pre("save",async function(next){
     if(!this.isModified("password")){
        next()
     }
     this.password = await bcrypt.hash(this.password,10)
})

//JWT TOKEN
const JWT_SECRET = "KJGFSDJKGJFDLKGJHFOIAHJSFKAJHKAJ"
const JWT_EXPIRE = "5d"

userSchema.methods.getJWTToken = function() { //jwt.sign => it is used to create a token 
    return jwt.sign({id : this._id},JWT_SECRET,{ // id => kispe token lagana hai , in this case it is id a\
        expiresIn : JWT_EXPIRE,  //kab expore hoga
    })
}

//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword,next){
    return (await bcrypt.compare(enteredPassword,this.password))
}





module.exports = mongoose.model("User",userSchema)
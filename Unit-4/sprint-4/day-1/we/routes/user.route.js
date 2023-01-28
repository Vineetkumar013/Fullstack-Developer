const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
//Register====================================================>

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age} = req.body
    const userpresent = await UserModel.findOne({email})
    if(userpresent){
        res.send("Already exist,Please login")
    }
    try {
        bcrypt.hash(pass, 8, async(err, hash)=>{
         const user = new UserModel({name,email,pass:hash,age})
        await user.save()
        res.send("Registered")
        })
        
    }catch (error) {
        console.log(Error)
        res.send("error in register")
    }
})

//Login=====================================================>

userRouter.post("/login",async(req,res)=>{
    const {email,pass}= req.body
    try {
        const user = await UserModel.find({email})

        if(user.length>0){
          const hashed_pass = user[0].pass;
          bcrypt.compare(pass, hashed_pass, (err, result)=>{
         if(result){
              const token = jwt.sign({ course: 'backend'},'masai',{expiresIn:"1h"}); 
              res.send({"msg":"Login Successfully","token":token})
         }else{
            res.send("Login failed")
         }
        })
           
           }else{
               res.send("Wrong Credential")
           }

    } catch (error) {
        console.log(Error)
        res.send("Something went wrong")
    }
})

//about====================================================>

userRouter.get("/about",(req,res)=>{
    res.send("ABOUT...")
})

userRouter.get("/cart",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,"masai",(err ,decoded)=>{
      if(err){
          res.send("Invalid token,Please login again")
          console.log(err)
      }else{
        res.send("Cart....")
      }
    })
})

userRouter.get("/data",(req,res)=>{
  const token = req.headers.authorization
  jwt.verify(token,"masai",(err ,decoded)=>{
    if(err){
        res.send("Invalid token,Please login again")
        console.log(err)
    }else{
      res.send("Data....")
    }
  })
})



module.exports ={
    userRouter
}
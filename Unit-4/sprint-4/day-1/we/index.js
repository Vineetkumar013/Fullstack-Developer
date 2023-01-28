const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
const {connection} = require("./configer/configer")
const {UserModel} = require("./model/user.model")
const {noteRouter} = require("./routes/note.route");
const {userRouter} = require("./routes/user.route")
const { authenticate } = require("./middleware/auth");

 
app.use(authenticate)
app.use("/note", noteRouter)
app.use("/user",userRouter)


//GET WELCOME=========================================>

app.use("/",(req,res)=>{
    res.send("WELCOME")
})



//Server==============================================>
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("error")
        console.log(error)
    }

})


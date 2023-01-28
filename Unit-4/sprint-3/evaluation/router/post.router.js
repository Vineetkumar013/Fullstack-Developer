const express = require("express")
const mongoose = require("mongoose")
const postrouter = express.Router()
const {Usermodel} = require("../model/schema.model")
const {validator} =require("../middleware/validator.middleware")


postrouter.use(validator)

postrouter.post("/post",async(req,res)=>{
    const {title,genre,price,author} = req.body
    try {
        let data = new Usermodel({title,genre,price,author}) 
        await data.save()
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send(error)
        console.log("error")
    }
})


module.exports ={
    postrouter
}
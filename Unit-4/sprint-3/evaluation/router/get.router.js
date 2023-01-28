const express = require("express")
const mongoose = require("mongoose")
const getrouter = express.Router()
const {Usermodel} = require("../model/schema.model")
// const {validator} =require("../middleware/validator.middleware")

getrouter.get("/",(req,res)=>{
    res.send("WELCOME")
})


//GET---------------------------------------------------------------->

getrouter.get("/get",async(req,res)=>{
    try {
        let data = await Usermodel.find()
        res.send(data)
    } catch (error) {
        res.send("error")
        console.log(error)
    }
})
 getrouter.get("/sorts",async(req,res)=>{
     let {sort} = req.query
     let low = req.query.low
     let high = req.query.high
     if(sort=="price_low"){
        let book = await Usermodel.find().sort({price:-1})
        console.log(book)
        res.send(book)
     }else if(sort=="price_high"){
        let book = await Usermodel.find().sort({price:1})
        console.log(book)
        res.send(book)
     }
    
     
 })

 getrouter.get("/genre", async(req,res)=>{
    const {genre}=req.query
    let bookdata= await Usermodel.find({genre:{$regex:genre,$options:"i"}})
    console.log(bookdata)
    res.send(bookdata)
    
    })

module.exports={
    getrouter
}
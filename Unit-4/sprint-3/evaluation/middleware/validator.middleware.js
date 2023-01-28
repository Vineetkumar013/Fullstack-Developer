
const express = require("express")
const app = express()
app.use(express.json())



const validator = (req,res,next)=>{
    const {title,genre,price,author}= req.body
    if(typeof(title)=="string" && typeof(genre)=="string" && typeof(price)=="number" && typeof(author)=="string"){
        next()
    }else{
        res.send("All the validations are not there")
    }
    }

    module.exports ={
        validator
    }
    
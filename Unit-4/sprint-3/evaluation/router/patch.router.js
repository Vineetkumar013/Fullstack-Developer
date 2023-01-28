const express = require("express")
const mongoose = require("mongoose")
const patchrouter = express.Router()
const {Usermodel} = require("../model/schema.model")
// const {validator} =require("../middleware/validator.middleware")
const {record} = require("../middleware/record.middleware")



patchrouter.use(record)


patchrouter.patch("/patch/:Id",async(req,res)=>{
    let {Id} = req.params
    let payload = req.body
    try {
        let data = await Usermodel.findByIdAndUpdate({_id:Id},payload)
       
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send(error)
        console.log("error")
    }
})


module.exports ={
    patchrouter
}
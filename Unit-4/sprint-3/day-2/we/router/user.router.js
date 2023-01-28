const express = require("express")
const {Usermodel} = require("../model/schema.model")
const Userrouter = express.Router()


Userrouter.get("/users",async(req,res)=>{
    const params = req.query
    try {
        const users = await Usermodel.find(params)
    res.send(users)
    } catch (error) {
       res.send("Something went wrong")
        console.log(error)
    }
})


Userrouter.post("/createuser",async(req,res)=>{
   const payload = req.body
    try {  
       
    const data =  new Usermodel(payload)
    await data.save()
        res.send(data)
    // res.send("Successfully Posted")
    console.log(data)
    } catch (error) {
        res.send("Something went wrong")
        console.log(error)
    }
})


Userrouter.patch("/createuser/:Id",async(req,res)=>{
    const payload = req.body
    let {Id} = req.params
    try {
    
    const data =  await Usermodel.findByIdAndUpdate({_id:Id},payload)
    res.send("Updated Successfully")
    res.send(data)
    console.log(data)
    } catch (error) {
        res.send("Something went wrong")
        console.log(error)
    }
})


module.exports={
    Userrouter
}

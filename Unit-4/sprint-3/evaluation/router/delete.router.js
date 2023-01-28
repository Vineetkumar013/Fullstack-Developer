const express = require("express")
const mongoose = require("mongoose")
const deleterouter = express.Router()
const {Usermodel} = require("../model/schema.model")
// const {validator} =require("../middleware/validator.middleware")
const {record} = require("../middleware/record.middleware")



deleterouter.use(record)

deleterouter.delete('/delete/:Id', async (req, res) => {
    let {Id} = req.params
 
    try {
      const note = await Usermodel.findByIdAndDelete({_id:Id});
    res.send(note)
  
  }catch (error) {
          res.status(500).send(error);
        }
      })
  
module.exports ={
   deleterouter
}
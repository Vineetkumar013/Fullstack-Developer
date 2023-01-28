const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.set('strictQuery', true);
const app =  express()
app.use(express.json())

///
const {connection} = require("./configure/configer")

const {Usermodel} = require("./model/schema.model")
const {getrouter} = require("./router/get.router")
const {deleterouter} = require("./router/delete.router")

const {patchrouter} = require("./router/patch.router")
const {postrouter} = require("./router/post.router")
const {record} = require("./middleware/record.middleware")

app.use("/", getrouter)
app.use("/",patchrouter)
app.use("/",deleterouter)
app.use("/",postrouter)
app.use(record)






app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")

    } catch (error) {
      
        console.log(error)
    }
    console.log(`SERVER on ${process.env.port}`)
} )
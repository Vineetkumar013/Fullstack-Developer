const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    title:String,
    genre:String,
    price:Number,
    author:String
})


const Usermodel = mongoose.model("user",userSchema)


module.exports={
    Usermodel
}

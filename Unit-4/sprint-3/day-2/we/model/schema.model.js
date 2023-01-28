const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    legal:Boolean
})


const Usermodel = mongoose.model("user",userSchema)


module.exports={
    Usermodel
}

const express =require("express")
require('dotenv').config()
const app = express()
app.use(express.json())

//-------------Required-------------------------//

const {Usermodel} = require("./model/schema.model")
const {connection} = require("./configure/configer")
const {Userrouter} = require("./router/user.router")
 
app.use("/", Userrouter)
//------------------------------------------------------------------------------------------------------------------------//

app.get("/",(req,res)=>{
    res.send("Welcome")
})



   



app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log(`Server On ${process.env.port}`)
    } catch (error) {
        console.log("error")
        console.log(error)
    }
}

)

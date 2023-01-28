const express =require("express")
const morgan = require("morgan")
const app =express()
app.use(express.json())
app.use(morgan(":method :status :res[content-length] :response-time ms :remote-user [:date[clf]]  HTTP/:http-version :url"))


app.get("/",(req,res)=>{
    res.send("HELLO Morgan")
})


app.post("/postdata",(req,res)=>{
    res.send("Data posted")
    console.log(req.body)
})

app.listen(4500,()=>{
    console.log("Server on 4500")
})
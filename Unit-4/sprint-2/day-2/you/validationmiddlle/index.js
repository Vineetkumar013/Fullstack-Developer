const express =require("express")
const app =express()
const fs=require("fs")


const logger=(req,res,next)=>{
    const startTime=new Date().getTime()
    next()
    const endTime=new Date().getTime()
    const Timetaken=endTime-startTime
    const date= new Date().getDate() 
    const month=new Date().getMonth()
    const year =new Date().getFullYear()
    fs.appendFileSync("./log.txt",  "\n"+"Method" +"="+ req.method+" "+"URL" +"=" +req.url + "TimeTaken"+"="+Timetaken +" "+ "date"+"="+date+"/"+month+"/"+year ,"utf-8")
    console.log(Timetaken)
    console.log(date)
    console.log(month)
    console.log(year)
}
app.use(logger)
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("byyy")
   const count= res.listenerCount("byyyyy")
   console.log(count)
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send("okay boss")
})

app.listen(8080,()=>{
    console.log("8080 is on streaming")
})



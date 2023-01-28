const express =require("express")
const fs = require("fs")
const app = express()
app.use(express.json())
const {logger} =require("./logger/logger")
const {validator}=require("./validator/validator")



//POST Api ----------------------------------------------------->
app.use(logger)
app.post("/students/addstudent",(req,res)=>{
    const data =req.body
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    parsed.students.push(data)
    fs.writeFileSync("./db.json",JSON.stringify(parsed))
    res.send("Student Added")
})

app.post("/teachers/addteacher",(req,res)=>{
    const data =req.body
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    parsed.teachers.push(data)
    fs.writeFileSync("./db.json",JSON.stringify(parsed))
    res.send("New teacher Added")
})


//GET APIS 


//FOR STUDENTS ------------------------------------------------------------------------------->
app.get("/students",(req,res)=>{
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    res.send(parsed.students)
})


app.get("/students/:rollNo",(req,res)=>{
    const {rollNo}=req.params
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    let student=parsed.students.find((el)=>el.roll_no===+rollNo)
    if(!student){
        res.send("student not found")
    }else{
        res.send(student)
    }
    
})

//FOR TEACHERS------------------------------------------------------------------------------------>
app.get("/teachers",(req,res)=>{
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    res.send(parsed.teachers)
})


app.get("/teachers/:empID",(req,res)=>{
    const {empID}=req.params
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    let teacher=parsed.teachers.find((el)=>el.emp_id===+empID)
    if(!teacher){
        res.send("teacher not found")
    }else{
        res.send(teacher)
    }
    
})


app.use(validator)
//UPDATE API-------------------------------------------------------------------------------------->
app.patch("/students/:rollNo",(req,res)=>{
    const {rollNo}=req.params
    const data =req.body
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    let index=parsed.students.findIndex((el)=>el.roll_no===+rollNo)
    parsed.students[index]=data
    console.log(parsed)
    if(!parsed.students[index]){
        res.send("student not found")
    }else{
        fs.writeFileSync("./db.json",JSON.stringify(parsed))
        res.send("New student updated")
    }
})


//DELETE--------------------------------------------------------------------------------->
app.delete("/students/:rollNo",(req,res)=>{
    const {rollNo}=req.params
    const db=fs.readFileSync("./db.json","utf-8")
    const parsed=JSON.parse(db)
    let index=parsed.students.findIndex((el)=>el.roll_no===+rollNo)
    if(!parsed.students[index]){
        res.send("student not found")
    }else{
        parsed.students.splice(index, 1)
        fs.writeFileSync("./db.json",JSON.stringify(parsed))
        res.send("student  Deleted")
    }
})

//SERVER--------------------------------------------------------------------->
app.listen(5500,()=>{
    console.log("server is live on 5500")
})
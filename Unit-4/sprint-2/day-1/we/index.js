const express = require("express")
const http = require("http")
const app =  express()
const fs =require("fs")
app.use(express.json())

app.get("/",(req,res)=>{

    res.send("hello thunder ")

})
app.get("/student",(req,res)=>{

  res.send("hello students how are you  ")

})


//GET
app.get("/getdata",(req,res)=>{
  const data = fs.readFileSync("./db.json","utf-8")
  
   const parse_data= JSON.parse(data)
    console.log(parse_data.students)
    res.end(JSON.stringify(parse_data.students))

})


//POST
app.post("/postdata",(req,res)=>{
  const data = fs.readFileSync("./db.json","utf-8")
  
  const parse_data= JSON.parse(data)
    parse_data.students.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    res.end("Data posted successfully")
    console.log(parse_data.students)

})


//PUT
app.put("/putdata",(req,res)=>{
  const data = fs.writeFileSync("./db.json",JSON.stringify(req.body))
const pdata = JSON.stringify(data)
console.log(req.body)
res.end("successfully updated")
})

//DELETE
app.delete("/delete/:Id", (req, res) => {
  const { Id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const deleted = JSON.parse(data);
    deleted.students = deleted.students.filter((item) => item.id != Id);
    fs.writeFile( "./db.json",JSON.stringify(deleted),{ encoding: "utf-8" },() => {
        res.send("deleted");
      }
    );
  });
})

// app.patch("/patch/:Id", (req, res) => {
//   const { Id } = req.params;
//   fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
//     const deleted = JSON.parse(data);
//     deleted.students = deleted.students.filter((item) => item.id != Id);
//     fs.writeFile( "./db.json",JSON.stringify(deleted),{ encoding: "utf-8" },() => {
//         res.send("deleted");
//       }
//     );
//   });
// })
//SERVER
app.listen(5500,()=>{
    console.log("Listenning on port 5500")
})









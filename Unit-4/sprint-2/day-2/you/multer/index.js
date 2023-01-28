const express=require("express")
const app=express()
const path=require("path")
const multer  = require('multer')


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now() + path.extname(file.originalname) )
    }
})


const upload=multer({storage:storage})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"upload.html"))
})


app.post("/upload",upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.send("image uploaded")
})

app.post("/Multi",upload.array("images",3),(req,res)=>{
    console.log(req.files)
    res.send("images uploaded")
})

app.listen(3700,()=>{
    console.log("3002 is now working")

})

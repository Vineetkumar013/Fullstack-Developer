const fs = require("fs")

const  writefile = function(x,y){
    fs.writeFile(x,y ,(err,data)=>{
   if(err){
    console.log("error")
   }else{
    console.log("data")
   }
    } )
}
const  readfile = function(x){
    fs.readFile(x,{encoding:"utf-8"} ,(err,data)=>{
   if(err){
    console.log("error")
   }else{
    console.log(data)
   }
    } )
}
const  deletefile = function(x){
    fs.unlink(x,(err,data)=>{
   if(err){
    console.log(err,"error")
   }else{
    console.log("data")
   }
    } )
}
const  appendfile = function(x,y){
    fs.appendFile(x,y,{encoding:"utf-8"} ,(err,data)=>{
   if(err){
    console.log("error")
   }else{
    console.log("data")
   }
    } )
}

const  renamefile = function(x,y){
    fs.rename(x,y ,(err,data)=>{
   if(err){
    console.log("error")
   }else{
    console.log("data")
   }
    } )
}

const list = function(x){
    fs.readdir(x,(err,data)=>{
        if(err){
            console.log("eroor")
        }else{
            console.log(data,"data")
        }
    })
}


module.exports ={writefile,readfile,deletefile,appendfile,renamefile,list}
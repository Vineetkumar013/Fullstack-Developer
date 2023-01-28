
// Node.js program to demonstrate 
// the fsPromises.readFile() method 
     
// Include fs module 
const fs = require('fs'); 
// const fs = require('node:fs');
const fsPromises = require('fs').promises;
const stream = require('stream')
// Use fsPromises.readFile() method
// to read the file 
fs.promises.readFile("./textpromise.txt")
.then(function(result) {
  console.log(""+result);
})
.catch(function(error) {
   console.log(error);
})
const http = require("http")
const server = http.createServer((request,response)=>{
    if(request.url ==="/textsync"){
        let rf = fs.readFileSync("./textsync.txt",{encoding:"utf-8"})
       response.end(rf)
    }else if(request.url ==="/textasync"){
         fs.readFile("./textasync.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                response.end(err)
            }else{
                response.end(data)
                // response.end(af)
            }
        })
       
    }else if(request.url==="/stream"){
        const rr = fs.createReadStream('textstream.txt', {encoding:"utf-8"});
       let data =""
       rr.on("data",(chunk)=>{
        data+=chunk
       })
       rr.on("end",()=>{
        response.end(data)
       })
       rr.on("err",(err)=>{
        response.end(err,"invalid stream")
       })
    }else if(request.url==="/"){
        response.end("this is Home page")
    }
    else{
        response.end("Invalid request")
    }

})

server.listen(5000,()=>{
console.log("server is running on 5000 ports")
})



const http = require("http")
const fs = require("fs")
// console.log(http)
const server = http.createServer((request,response)=>{
if(request.url==="/"){
    response.write("hello world   ")
    response.end("i am back at the end")
}else if(request.url==="/data"){
   fs.readFile("./data.json",(err,data)=>{
    if(err){
        response.write(err)
        response.end(err)
    }else{
        response.end(data)
    }
   })
}else if(request.url==="/reports"){
    response.setHeader("Content-type","text/html")
    response.end("<h1 >Reports</h1>")

}else{
    response.end("Invalid request")
}
})


server.listen(4500, ()=>{
    console.log("this server is running ports on 4500")
})
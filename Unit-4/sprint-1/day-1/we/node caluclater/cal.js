const {add, sub, mul, divide, sin, cos, tan, random} = require("./index.js")
// const process = require("process")
let cmd = process.argv

if(cmd[2] === "add"){
    console.log(add(cmd[3],cmd[4]))
}

if(cmd[2] === "sub"){
    console.log(sub(cmd[3],cmd[4]))
}

if(cmd[2] === "mul"){
    console.log(mul(cmd[3],cmd[4]))
}

if(cmd[2] === "divide"){
    console.log(divide(cmd[3],cmd[4]))
}
if(cmd[2] === "sin"){
    console.log(sin(cmd[3]))
}
if(cmd[2] === "cos"){
    console.log(cos(cmd[3]))
}
if(cmd[2] === "tan"){
    console.log(tan(cmd[3]))
}
// if(cmd[2] === "random"){
//     console.log(random(cmd[3],cmd[4]))
// }

const crypto = require("crypto")
if(cmd[2]=="random"){
    let num = crypto.randomInt(+cmd[3],+cmd[4])
    console.log(num)
    // console.log(cmd.length)
}

// switch(){
//     const[num,oper,num2,]
//     case "add":
//     return add(cmd[3],cmd[4])
//     default:
//     return "something worng"
  
// }



// const process = require("process");

// const commands = process.argv[2];
// const first=process.argv[3];
// const second=process.argv[4];

// switch(commands){
//   case "add" :
//     console.log(sum(first,second))
//     break;
//     case "sub" :
//     console.log(sub(first,second))
//     break;
//     default:
//       console.log("indvalid case")
// }

// const fs = require("fs")
// fs.readFile("./ff.txt",{encoding:"utf-8"},(error,data)=>{
//     if(error){
//         console.log("error in file")
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })

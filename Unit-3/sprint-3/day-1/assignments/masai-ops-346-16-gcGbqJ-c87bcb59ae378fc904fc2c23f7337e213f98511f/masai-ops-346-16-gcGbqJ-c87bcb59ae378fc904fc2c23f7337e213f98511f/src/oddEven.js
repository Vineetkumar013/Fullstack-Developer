function getData(data) {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(isNaN(data)){
              reject("error")
            }

        });
        setTimeout(()=>{
            if(data%2==1){
              resolve("odd")
              }
              
        },3000)
        setTimeout(()=>{
            if(data%2==0){
               resolve("even")
              }
        },4000)
    })
}

let newpromise = new getData(-55)
newpromise
.then((data)=>{
    if(data){
        console.log(data)
    }
}).catch((error)=>{
    console.log(error)
})
export default getData





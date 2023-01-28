function job(delay, value) {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(value)
        },delay)
    })
}
var p1 =new job(1000,10)
var p2 =new job(3000,20)
var p3 =new job(500,30)
var p4 =new job(1500,40)

Promise.all([p1,p2,p3,p4]).then((data)=>console.log(data))
var results;

export { job, results };


// nearest greater element in stack in javascript 
// check odd even in javascript
 // check odd even in settimeout using promise in javascript ?








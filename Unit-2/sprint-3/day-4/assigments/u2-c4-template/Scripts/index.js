// Write code related to Home page here 
let task = document.querySelector("form")
let taskArr =JSON.parse(localStorage.getItem("task-List")) || []
task.addEventListener("submit",function(event){
    event.preventDefault();
    // let taskname =document.querySelector("#name").value
    // let taskdesc =document.querySelector("#desc").value
    // let taskstart =document.querySelector("#start").value
    // let taskend =document.querySelector("#end").value
    // let taskpriority =document.querySelector("#priority").value
let obj ={
    name:task.name.value,
    desc:task.desc.value,
    start:task.start.value,
    end:task.end.value,
    priority:task.priority.value
}
taskArr.push(obj)
if(obj.name=="" || obj.desc==""||obj.start==""||obj.end==""||obj.priority==""){
    alert("please fill the form")
}else{
localStorage.setItem("task-List",JSON.stringify(taskArr))
}
})



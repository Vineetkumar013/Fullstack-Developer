document.querySelector("form").addEventListener("submit",myTodo)

function myTodo(event){
event.preventDefault()
let taskName =document.querySelector("#task").value
let taskPriority = document.querySelector("#priority").value
let taskobj={
    taskName,
    taskPriority
}
display(taskobj)
}


function display(taskobj){
  // tbody.innerHTML= null;
    let row = document.createElement("tr")
   
  let td1 = document.createElement("td")
  td1.innerText = taskobj.taskName;
  let td2 = document.createElement("td")
  td2.innerText = taskobj.taskPriority
  if(taskobj.taskPriority=="High"){
    td2.style.backgroundColor="green"
  }else{
    td2.style.backgroundColor="pink"
  }
  let td3 = document.createElement("td")
  td3.innerText ="Add as fav";
  row.append(td1,td2,td3)
  document.querySelector("tbody").append(row)
}
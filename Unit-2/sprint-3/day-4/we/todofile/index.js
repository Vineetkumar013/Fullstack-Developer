document.querySelector("form").addEventListener("submit",myTodo)
let todoArr =JSON.parse(localStorage.getItem("todo"))||[]
displayTable(todoArr);
let favArr = JSON.parse(localStorage.getItem("favourite"))||[]
function myTodo(event){
event.preventDefault()
let taskName =document.querySelector("#task").value
let taskPriority = document.querySelector("#priority").value
let taskobj={
    taskName,
    taskPriority
};
todoArr.push(taskobj)
localStorage.setItem("todo",JSON.stringify(todoArr))
displayTable(todoArr);
}


function displayTable(todoArr){
  document.querySelector("tbody").innerHTML=""
for(let i =0; i< todoArr.length; i++){
  let row = document.createElement("tr")
   
  let td1 = document.createElement("td")
  td1.innerText = todoArr[i].taskName;
  let td2 = document.createElement("td")
  td2.innerText = todoArr[i].taskPriority;
  if(todoArr[i].taskPriority=="High"){
    td2.style.backgroundColor="green"
  }else{
    td2.style.backgroundColor="red"
  }
  let td3 = document.createElement("td")
  td3.innerText ="Add as fav";
  td3.addEventListener("click",function(){
    favArr.push(todoArr[i])
localStorage.setItem("favourite",JSON.stringify(favArr))
  })
  row.append(td1,td2,td3)
  document.querySelector("tbody").append(row)
}
    
}
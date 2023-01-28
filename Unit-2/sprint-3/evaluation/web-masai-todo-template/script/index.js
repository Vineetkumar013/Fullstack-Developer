// Write all the JS Code related to Home Page Here 

let form = document.querySelector("form")
let LSData =JSON.parse(localStorage.getItem("tasks"))||[];
form.addEventListener("submit",function(event){
    event.preventDefault();
let obj ={
        name:form.name.value,
        type:form.type.value,
        date:form.date.value,
        priority:form.priority.value
}
if(obj.name==""||obj.type==""||obj.date==""||obj.priority==""){
    alert("please fill the form")
}else{
    LSData.push(obj)
    localStorage.setItem("tasks",JSON.stringify(LSData))
}
})


function displayTable(data){
document.querySelector("tbody").innerHTML=""
    data.forEach(function(element,index){
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        name.innerText = element.name;
        let type = document.createElement("td");
        type.innerText =element.type
        let date = document.createElement("td");
        date.innerText = element.date
        let priority = document.createElement("td");
        priority.innerText = element.priority
        let complete = document.createElement("td");
        complete.innerText ="completed"
        complete.addEventListener("click",function(){
            addData("task-completed",element)
            deleteData(LSData,index)
        });
        
        tr.append(name,type,date,priority,complete)
        document.querySelector("tbody").append(tr)
        
    });
}

function addData(key,value){
    let newLSData =JSON.parse(localStorage.getItem(key))||[];
    newLSData.push(value)
    localStorage.setItem(key, JSON.stringify(newLSData))
}

function deleteData(data,index){
    data.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(data))
    displayTable(data);
    }

    displayTable(LSData);
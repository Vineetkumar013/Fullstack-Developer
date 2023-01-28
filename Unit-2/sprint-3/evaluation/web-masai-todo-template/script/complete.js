// Write all the JS Code related to taskpleted Page Here 
let task = JSON.parse(localStorage.getItem("task-completed"));
let Arr =JSON.parse(localStorage.getItem("task-favourites"))||[]
let filter =document.querySelector("#filter")
displayTable(task);

function displayTable(task){
    document.querySelector("tbody").innerHTML="";
    task.forEach(function(element,index){
        let row =document.createElement("tr");
    let td1 =document.createElement("td")
  td1.innerText =element.name;
    let td2 =document.createElement("td")
    td2.innerText = element.type;
    let td3 =document.createElement("td")
    td3.innerText = element.date
    let td4 =document.createElement("td")
    td4.innerText = element.priority
    let td5 =document.createElement("td")
    td5.innerText = "favourite"
    td5.addEventListener("click", function(){
    Arr.push(element);
    
    localStorage.setItem("task-favourites",JSON.stringify(Arr))
    deleteData(Arr,index)
    });

    row.append(td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(row);
    
    });
    
}

function deleteData(data,index){
  data.splice(index,1);
  localStorage.setItem("task-completed",JSON.stringify(data))
  displayTable(data);
  }



filter.addEventListener("change",function(){
  if(filter.value==""||filter.value=='all'){
      displayTable(task)
  }else{
      let filteredData =task.filter(function(el){
          return el.priority===filter.value;
  
  })
  displayTable(filteredData);
}
})
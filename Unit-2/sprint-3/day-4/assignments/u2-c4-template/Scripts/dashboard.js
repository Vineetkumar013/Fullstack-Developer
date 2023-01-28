// Write code related to dashboard page here
let dash = JSON.parse(localStorage.getItem("task-List"))
let filter =document.getElementById("filter")
let pro =JSON.parse(localStorage.getItem("priority-list"))||[];
displayTable(dash)

function displayTable(dash){
    document.querySelector("tbody").innerHTML =""
   dash.forEach(function(elem,i) {
    let row = document.createElement("tr")

    let td1 =document.createElement("td")
    td1.innerText =dash[i].name
    let td2 =document.createElement("td")
    td2.innerText = dash[i].desc
    let td3 =document.createElement("td")
    td3.innerText = dash[i].start
    let td4 =document.createElement("td")
    td4.innerText = dash[i].end
    let td5 =document.createElement("td")
    td5.innerText=dash[i].priority
    let td6 =document.createElement("td")
    td6.innerText="Add"
   td6.addEventListener("click",function(){
 pro.push(dash[i]);
 localStorage.setItem("priority-list",JSON.stringify(pro))
 deleteData(dash,i);

   })
    row.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(row);
    
   });
        
    }

    filter.addEventListener("change",function(){
        if(filter.value==""||filter.value=='all'){
            displayTable(dash)
        }else{
            let filteredData =dash.filter(function(el){
                return el.priority===filter.value;
        
        })
        displayTable(filteredData);
    }
    })
 function deleteData(data,index){
    data.splice(index,1);
    localStorage.setItem("task-List",JSON.stringify(data));
    
 }
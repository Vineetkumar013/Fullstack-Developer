// Write code related to Done page here
let done = JSON.parse(localStorage.getItem("done-list"));
// let final = []
displayTable(done)

function displayTable(done){
        done.forEach(function(elem,i){
         let row = document.createElement("tr")
     
         let t1 =document.createElement("td")
         t1.innerText =done[i].name
         let t2 =document.createElement("td")
         t2.innerText = done[i].desc
         let t3 =document.createElement("td")
         t3.innerText = done[i].start
         let t4 =document.createElement("td")
         t4.innerText = done[i].end
         let t5 =document.createElement("td")
         t5.innerText=done[i].priority
         row.append(t1,t2,t3,t4,t5)
         document.querySelector("tbody").append(row);
     
        });
    }
         

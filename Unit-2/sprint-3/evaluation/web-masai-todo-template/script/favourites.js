// Write all the JS Code related to Favourites Page Here
let fav = JSON.parse(localStorage.getItem("task-favourites"));

displayTable(fav);

function displayTable(fav) {
  document.querySelector("tbody").innerHTML=""
  fav.forEach(function(elem,i){
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = fav[i].name;
    let td2 = document.createElement("td");
    td2.innerText = fav[i].type;
    let td3 = document.createElement("td");
    td3.innerText = fav[i].date;
    let td4 = document.createElement("td");
    td4.innerText = fav[i].priority;

    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);
  });
}
// zdhgfvkhsadlkvhjklzsdfjvklzdjklbvjdklfjbdjfbgjkldfzjbodzf



// let fav =JSON.parse(localStorage.getItem("task-favourites"));
// // console.log(fav)
//     displaytable(fav)
   
//     function displaytable(fav){
//         document.querySelector("tbody").innerHTML=""
        
//         fav.forEach(function(elem,i){
//   let row = document.createElement("tr")
   
//   let td1 = document.createElement("td")
//   td1.innerText = fav[i].name;
//   let td2 = document.createElement("td")
//   td2.innerText = fav[i].type;
//   if(fav[i].taskPriority=="High"){
//     td2.style.backgroundColor="green"
//   }else{
//     td2.style.backgroundColor="red"
//   }
//   let td3 =document.createElement("td")
//   td3.innerText ="Delete"
//   td3.addEventListener("click",function(){
//     deletefav(elem,i);

//   })
 
//   row.append(td1,td2,td3)
//   document.querySelector("tbody").append(row)
// })
//     }
    // function deletefav(elem,i){
    //     fav.splice(i,1)
    //     // console.log(fav)
    //     displaytable(fav);
    //     localStorage.setItem("favourite",JSON.stringify(fav))
    // }
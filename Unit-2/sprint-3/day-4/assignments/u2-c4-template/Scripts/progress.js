// Write code for the arrgress page here
let fav = JSON.parse(localStorage.getItem("priority-list"));

let arr = JSON.parse(localStorage.getItem("done-list")) || [];
displayTable(fav);

function displayTable(fav) {
  document.querySelector("tbody").innerHTML ="";
  fav.forEach(function (elem, i) {
    let row = document.createElement("tr");

    let t1 = document.createElement("td");
    t1.innerText = fav[i].name;
    let t2 = document.createElement("td");
    t2.innerText = fav[i].desc;
    let t3 = document.createElement("td");
    t3.innerText = fav[i].start;
    let t4 = document.createElement("td");
    t4.innerText = fav[i].end;
    let t5 = document.createElement("td");
    t5.innerText = fav[i].priority;
    let t6 = document.createElement("td");
    t6.innerText = "Add";
    t6.addEventListener("click", function () {
      arr.push(fav[i]);
      localStorage.setItem("done-list", JSON.stringify(arr));
      deleteData(fav, i);
    });
    row.append(t1, t2, t3, t4, t5, t6);
    document.querySelector("tbody").append(row);
  });
}
function deleteData(data, index) {
  data.splice(index, 1);
  localStorage.setItem("priority-list", JSON.stringify(data));
  displayTable(data);
}

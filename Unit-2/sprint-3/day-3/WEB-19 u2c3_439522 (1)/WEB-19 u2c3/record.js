// fill in javascript code here
document.querySelector("form").addEventListener("submit", myfun);

function myfun(event) {
  event.preventDefault();

  let docname = document.querySelector("#name").value;
  let docId = document.querySelector("#employeeID").value;
  let docspecial = document.querySelector("#department").value;
  let docexperience = document.querySelector("#exp").value;
  let docemail = document.querySelector("#email").value;
  let docmobile = document.querySelector("#mbl").value;
  let obj = {
    docname,
    docId,
    docspecial,
    docexperience,
    docemail,
    docmobile
  };
  display(obj)
}

function display(obj) {
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = obj.docname;
  let td2 = document.createElement("td");
  td2.innerText = obj.docId;
  let td3 = document.createElement("td");
  td3.innerText = obj.docspecial;
  let td4 = document.createElement("td");
  td4.innerText = obj.docexperience;
  let td5 = document.createElement("td");
  td5.innerText = obj.docemail;
  let td6 = document.createElement("td");
  td6.innerText = obj.docmobile;
  let td7 = document.createElement("td");
  if (obj.docexperience > 5) {
    td7.innerHTML = "<i>Senior</i>";
  } else if (obj.docexperience >= 2 && obj.docexperience <= 5) {
    td7.innerHTML = "<i>Junior</i>";
  } else if (obj.docexperience <= 1) {
    td7.innerHTML = "<i>Trainee</i>";
  }

  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.style.backgroundColor ="red"

  td8.addEventListener("click", myfuct);
  row.append(td1,td2,td3,td4,td5,td6,td7,td8);
  document.querySelector("tbody").append(row);
}

function myfuct(event) {
  event.target.parentNode.remove();
}

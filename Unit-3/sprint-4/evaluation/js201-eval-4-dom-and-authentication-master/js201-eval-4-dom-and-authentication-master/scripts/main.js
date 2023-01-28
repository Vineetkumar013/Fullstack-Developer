// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;



loginUserButton.addEventListener("click", user_login);

async function user_login() {

  try {
    let obj = {};

    let username = loginUserUsername.value;
    let password = loginUserPassword.value;

    obj = {
      username: username,
      password: password
    }

    let request = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    let data = await request.json();
    let userAuthToken = data.accessToken;
    let userId = data.user.id;
    // console.log(data)
    localStorage.setItem("localAccessToken", userAuthToken)
    localStorage.setItem("userId", userId)
    notificationWrapper.innerHTML = `
    <h5 class="notification info">
    hey ${username}, welcome back!
    </h5>
    `
    // if (request.ok) {
    //   todoFetchRequest(userId, userAuthToken);
    // }
  } catch (error) {
    notificationWrapper.innerHTML = `
    <h5 class="notification info">
    Bad Request!!
    </h5>
    `
  }
}

getTodoButton.addEventListener("click", todoFetchRequest);

async function todoFetchRequest() {
  let request = await fetch(urlAllTodosOfUser, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthToken}`
    }
  })
  let data = await request.json();
  DisplayData(data)
  // console.log(data)
}


function DisplayData(data) {
  mainSection.innerHTML = "";
  let show_data = data.map((element) => {
    if (element.completed === false) {
      return `
      <label><input class="todo-item-checkbox" data-id=${element.id} type="checkbox">${element.title}</label>
      `
    }
    else {
      return `
      <label><input class="todo-item-checkbox" data-id=${element.id} type="checkbox" checked="">${element.title}</label>
      `
    }
  });
  mainSection.innerHTML = show_data.join(" ");

  let checkbox_btn = document.querySelectorAll(".data-list-wrapper");
  for (let btn of checkbox_btn) {
    btn.addEventListener("click", function (event) {
      let data_id = event.target.dataset.id;
      let status = event.target.dataset.completed === "false" ? true : false;
      toggleStatus(data_id, status)
    })
  }
}

async function toggleStatus(userId, status) {
  let request = await fetch(urlAllTodosOfUser, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthToken}`
    },
    body: JSON.stringify({ "completed": status })
  });
  let data = await request.json();
  DisplayData(data);
}
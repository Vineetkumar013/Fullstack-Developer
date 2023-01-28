let queueDiv = document.getElementById("queue-div");
let registerBtn = document.getElementById("register-btn");
let startVaccination = document.getElementById("start-vaccination-btn");

// init
let queue = ["swanand", "maya", "bob", "ronaldo"];
reRenderQueue();
registerBtn.addEventListener("click", register);
startVaccination.addEventListener("click", start);

function reRenderQueue() {
  queueDiv.innerHTML = `
    <code><pre>${JSON.stringify(queue, null, 2)}</pre></code>
  `;

  // let list = document.createElement("ol");
  // queueDiv.innerHTML = "";
  // queueDiv.append(list);

  // queue.forEach((item) => {
  //   let li = document.createElement("li");
  //   li.innerText = item;
  //   list.append(li);
  // });

  // queueDiv.innerHTML = `
  //   <ol>
  //     ${queue.map((item) => `<li>${item}</li>`).join("")}
  //   </ol>
  // `;
}

function register() {
  let name = document.getElementById("name").value;
  queue.push(name);

  let message = `${name} your registration is succesfull. Please wait for your turn.`;
  console.log(message);

  reRenderQueue();
}

function start() {
  let interval = setInterval(function () {
    let firstOnQueue = queue.shift();
    if (firstOnQueue) {
      let message = `${firstOnQueue}, it's your turn.`;
      reRenderQueue();
      console.log(message);
    } else {
      console.log("All done! 🎉");
      clearInterval(interval);
    }
  }, 2000);
}

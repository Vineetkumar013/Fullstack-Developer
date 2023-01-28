// import "./styles.css";

let catImages = [
  "https://burst.shopifycdn.com/photos/grey-cat-lays-in-sun.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/business-cat-in-office.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/blue-eyed-cat-daydreams.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/blue-eyed-cat-peeking.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/grey-cat-with-blue-eyes.jpg?width=400&format=pjpg&exif=1&iptc=1"
];

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

startButton.addEventListener("click", function () {
  start();
});

pauseButton.addEventListener("click", function () {
  pause();
});

let id;
let i = 0;
function start() {
  // optionally give students the task to store images to local storage
  // let images = JSON.parse(localStorage.getItem("images"));
  let images = catImages;

  let container = document.getElementById("container");

  container.innerHTML = null;

  let img = document.createElement("img");

  if (i === images.length) {
    i = 0;
  }
  img.src = images[i];
  i++;

  container.append(img);

  id = setInterval(function () {
    if (i === images.length) {
      i = 0;
    }

    let image = images[i]; //url

    container.innerHTML = null;

    let img = document.createElement("img");

    img.src = image;

    container.append(img);

    i++;
  }, 3000);
}

//0,1,2
//3
//0,1,2
//3
//0,1,2

function pause() {
  console.log("i pause:", i);

  clearInterval(id);
}

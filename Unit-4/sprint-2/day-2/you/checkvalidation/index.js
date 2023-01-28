const express = require("express");

const app = express();

app.use(express.json());

const checker = (req, res, next) => {
    const { Id, Name, rating, Description, genre, Cast } = req.body;
  if(typeof(Id) == "number" && typeof(Name) == "string" && typeof(rating) == "number" && typeof(Description) == "string" && typeof(genre) == "string" && typeof(Cast) == "object" ) {
    next()
  } else {
    console.log("bad request is 404");
  }
}


app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.use(checker);


app.post("/data", (req, res) => {
  const { Id, Name, rating, Description, genre, Cast } = req.body;

  res.send("OKK Received");
  console.log(req.body);
});


app.listen(4500, () => {
  console.log("SERVER ON 4500");
});


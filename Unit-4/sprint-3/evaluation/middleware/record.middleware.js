const fs = require("fs");
const express =require("express")
const app = express()
app.use(express.json())
const record = (req, res, next) => {
       if (req.method == "DELETE") {
              fs.appendFileSync("records.txt", `The document with id: ${req.params.id} has been deleted \n`);
              next();
       }
       else if (req.method == "PATCH") {
              fs.appendFileSync("./records.txt", `The document with id: ${req.params.id} has been updated \n`);
              next();
       }
       else{
              console.log("All the fields are not there")
       }
}

module.exports = {
       record
}
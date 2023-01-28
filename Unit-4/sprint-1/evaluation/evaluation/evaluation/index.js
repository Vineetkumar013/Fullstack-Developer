const http = require("http");
const fs = require("fs");
const cowsay = require("cowsay");
const dns = require("dns");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM </h1>");
  } else if (req.url === "/writeinfile") {
    fs.writeFile("./employee.txt", "", "utf-8", (error) => {
      if (error) {
        res.end("Bad Request!!");
        return;
      } else {
        fs.appendFile(
          "./employee.txt",
          "Employee names are as follows:",
          "utf-8",
          (err) => {
            if (err) {
              console.log("Bad Request!!");
              return;
            }
          }
        );
      }
      res.end("<h1>Data has been written in the file</h1>");
    });
  } else if (req.url === "/enternames") {
    let nameArr = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];

    nameArr.forEach((element) => {
      fs.appendFile("./employee.txt", `${"\n" + element}`, "utf-8", (err) => {
        if (err) {
          console.log("Bad Request!!");
          return;
        }
      });
    });
    res.end("<h1>All the names added in the file</h1>");
  } else if (req.url === "/alldetails") {
    fs.readFile("./employee.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Bad Request!!");
        return;
      } else {
        res.end(
          cowsay.say({
            text: data,
          })
        );
      }
    });
  } else if (req.url === "/address") {
    dns.lookup(`${process.argv[2]}`, (err, address, family) => {
      if (err) {
        console.log("Bad Request!!");
        return;
      } else {
        res.end(`The IP Address is ${address}`);
      }
    });
  } else if (req.url === "/delete") {
    fs.unlink("./employee.txt", (err) => {
      if (err) {
        console.log("Bad Request!!");
        return;
      } else {
        res.end("File has been deleted");
      }
    });
  } else {
    res.end("Invalid Endpoint");
  }
});

server.listen(8080);

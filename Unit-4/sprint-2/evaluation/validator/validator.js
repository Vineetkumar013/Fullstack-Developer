const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

const validator = (req, res, next) => {
    if (req.method === "PATCH" || req.method === "DELETE") {
      const { password, role } = req.query;
      if (password === "7877" && (role === "admin" || role === "teacher")) {
        next();
      } else {
        res.send("You are not authorized to do this operation");
      }
    } else {
      next();
    }
  };

  module.exports ={validator}
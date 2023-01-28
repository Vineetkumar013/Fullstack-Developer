const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

const logger = (req, res, next) => {
    const { method, path } = req;
    const userAgent = req.headers['user-agent'];
    const log = ` Method:${method}, Route:${path}, user-agent:${userAgent}`;
    fs.appendFile('./log.txt', log + '\n', (err) => {
      if (err){
        throw err;
      } 
      console.log('Log written to file');
    });
    next();
  };
  

  module.exports ={logger}
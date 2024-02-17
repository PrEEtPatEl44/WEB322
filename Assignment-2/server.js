/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Preet Bhagyesh Patel Student ID: 132603226 Date: 16th Feb 2024
*
********************************************************************************/


const legoData = require("./modules/legoSets");
const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<a  style=\"display: flex; justify-content: center; align-items: center; height:100vh;font-size:70px;\"href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">Assignment 2: Preet Bhagyesh Patel - 132603226</a>");
});

app.get("/lego/sets", (req, res) => {
  legoData
    .getAllSets()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/lego/sets/num-demo", (req, res) => {
  legoData
    .getSetByNum("01-Apr")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.get("/lego/sets/theme-demo", (req, res) => {
  legoData
    .getSetsByTheme("sup")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.listen(HTTP_PORT, () => {
  console.log(`server listening on: ${HTTP_PORT}`);
  legoData
    .initialize()
    .then(() => {
      console.log("Data initialized successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

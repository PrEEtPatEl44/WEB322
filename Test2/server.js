/*//////////////////////////////////////////////////////////////////////////////*
Name            :Preet Bhagyesh Patel
Student Number  :132603226   
Section         :NBB
Date            :19 January 2024
Email           :pbpatel48@myseneca.ca
////////////////////////////////////////////////////////////////////////////////*/ 

const express = require("express");
const path = require("path");
app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/other.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/other.html"));
});

app.listen(HTTP_PORT, () => {
  console.log(`listining at http://localhost:${HTTP_PORT}`);
});

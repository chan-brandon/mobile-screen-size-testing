// jshint esversion:6

const express = require("express");
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.get("/", function(req, response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, response){
  response.sendFile(__dirname + "/contact.html");
});

app.get("/about", function(req,response){
  response.sendFile(__dirname + "/about.html");
});

app.get("/movie", function(req, response){
  response.sendFile(__dirname + "/movie.html");
});

// jshint esversion:6

const express = require("express");
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.get("/", function(req, response){
  response.send("Hello, world!");
});

app.get("/contact", function(req, response){
  response.send("This is a contact page!");
});

app.get("/about", function(req,response){
  response.send("Brandon owns this website!");
});

app.get("/movie", function(req, response){
  response.send("This is a testing page.");
});
 

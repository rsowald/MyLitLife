import React from "react";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));

db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

function Login() {
    return (
        <></>
    )
}

export default Login;
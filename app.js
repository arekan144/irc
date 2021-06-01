"use strict";

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;

const getr = require("./routers/getr.js");
const postr = require("./routers/postr.js");
app.use(express.static('./static/css'));
app.use(express.static('./static/js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, function () {
    console.log("PORT: " + PORT)
})


app.use('/', getr);
app.use('/', postr)




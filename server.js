const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Welcome to my Luke's backend application")});

app.get('/luke', (req,res) => {res.send("Hello Luke")});

app.listen(port, ()=>console.log("Listening"));
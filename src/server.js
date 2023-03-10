import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();


const app = express();
const port = process.env.PORT
const path = require('path');

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs');
})
app.get('/miku', (req, res) => {
    res.send(`Do you wanna listen a song?`)
})
app.listen(port, () => {
    console.log(`Miku-chan writing some thing in http://localhost:${port}/`)
})
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";

// import connection from "./configs/connectDB";

require('dotenv').config();

const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view
configViewEngine(app);
//init web route
initWebRoute(app);
//init api route
initAPIRoute(app);
app.listen(port, () => {
    console.log(`Miku-chan writing some thing in http://localhost:${port}/`)
})
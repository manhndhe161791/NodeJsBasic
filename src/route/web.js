import express from "express";
import homeController from "../controller/homeController";
let route = express.Router();

const initWebRoute = (app) => {
    //app.MEDTHOD(PATH, HANDLER)
    route.get('/', homeController.getHomepage);
    route.get('/miku', (req, res) => {
        res.send(`Do you wanna listen a song?`)
    })
    return app.use('/', route);
}
export default initWebRoute;
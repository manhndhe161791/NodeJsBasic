import express from "express";
import APIController from "../controller/APIController"


let route = express.Router();

const initAPIRoute = (app) => {
    //app.MEDTHOD(PATH, HANDLER)
    route.get('/user', APIController.getAllUser); //method GET -> READ data
    route.post(`/create-user`, APIController.createNewUser); //method POST -> CREATE data
    route.put('/update-user', APIController.updateUser); //method PUT -> UPDATE data
    route.delete('/delete-user/:id', APIController.deleteUser); //method DELETE -> DELETE data

    return app.use('/api/v1/', route);
}
export default initAPIRoute;
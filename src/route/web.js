import express from "express";
import homeController from "../controller/homeController";
let route = express.Router();

const initWebRoute = (app) => {
    //app.MEDTHOD(PATH, HANDLER)
    route.get('/', homeController.getHomepage);
    route.get('/detail/user/:id', homeController.getDetailPage);

    route.post('/creat-new-user', homeController.createNewUser);
    route.post('/delete-user', homeController.deleteUser);
    route.get('/edit-user/:id', homeController.getEditPage)
    route.post('/update-user', homeController.updateUser)

    route.get('/upload', homeController.getUploadFilePage)
    route.post('/upload-profile-picture', homeController.handleUploadFile)

    route.get('/miku', (req, res) => {
        res.send(`Do you wanna listen a song?`)
    })
    return app.use('/', route);
}
export default initWebRoute;
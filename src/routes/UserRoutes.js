const express = require("express")
const UserController = require("../controllers/UserController")
const router = express.Router();
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware")


router.post('/sign-up', UserController.createUserController)
router.post('/sign-in', UserController.loginUserController)
router.post('/log-out', UserController.logoutUserController)
router.put('/update-user/:id', UserController.updateUserController)
router.delete('/delete-user/:id', UserController.deleteUserController)
router.get('/getAll', UserController.getAllUserController)
router.get('/get-details/:id', UserController.getDetailsUserController) 
router.post('/refresh-token', UserController.refreshToken)
router.post('/delete-many-user', UserController.deleteMany)


module.exports = router
const express = require("express")
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProductController)
router.put('/update/:id', ProductController.updateProductController)
router.get('/details/:id', ProductController.detailsProductController) 
router.delete('/delete/:id', ProductController.deleteProductController)
router.get('/getAll', ProductController.getAllProductController)
router.post('/delete-many', ProductController.deleteMany)
router.get('/get-all-type', ProductController.getAllType)

module.exports = router
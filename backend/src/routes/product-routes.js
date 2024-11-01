const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateController = require("../controllers/Products/UpdateController");

router.get('/products', AllProductsController);
router.post('/products', CreateController);
router.put('/products/:id', UpdateController);


module.exports = router;
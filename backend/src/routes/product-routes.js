const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');

router.get('/products', AllProductsController);
router.post('/products', CreateController);

module.exports = router;
const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController');
router.get('/products', AllProductsController);

module.exports = router;
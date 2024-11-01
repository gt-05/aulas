const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateController = require("../controllers/Products/UpdateController");
const DeleteController = require("../controllers/Products/DeleteController");
const GetBySlug = require("../controllers/Products/GetBySlug");

router.get('/products', AllProductsController);
router.get('/products/:slug', GetBySlug);
router.post('/products', CreateController);
router.put('/products/:id', UpdateController);
router.delete('/products/:id', DeleteController);

module.exports = router;
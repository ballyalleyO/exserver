const path = require('path');
const express = require('express');
const router = express.Router();
const productsController =require('../controllers/products')


//Method GET
//URL /
router.get("/", productsController.getProducts);



module.exports = router;
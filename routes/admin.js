const path = require("path");
const express = require("express");
const productsController = require('../controllers/products')
const router = express.Router();

// method POST
// URL /admin/cart
router.get("/cart", productsController.getAddProduct );

// method POST
// URL /admin/cart
router.post("/cart", productsController.postAddProduct);



module.exports = router;

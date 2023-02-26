const path = require("path");
const express = require("express");
const rootDir = require("../../helper/path");
const router = express.Router();

const products = [];

// method POST
// URL /admin/cart
router.get("/cart", (req, res, next) => {
  console.log("Logging in /admin/cart...");
  res.sendFile(path.join(rootDir, "views", "shopping-cart.html"));
});

// method POST
// URL /admin/cart
router.post("/cart", (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect("/");
});


exports.routes = router;
exports.products = products;

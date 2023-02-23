const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../../helper/path");

// method POST
// URL /admin/cart
router.get("/cart", (req, res, next) => {
  console.log("Middleware logging in USERS...");

  res.sendFile(path.join(rootDir, "views", "shopping-cart.html"));
});

// method POST
// URL /admin/cart
router.post("/cart", (req, res, next) => {
  console.log("Middleware logging in CART...");

  res.redirect("/");
});

module.exports = router;

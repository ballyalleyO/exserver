const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require("../../helper/path");
const adminData = require("./admin")

//Method GET
//URL /
router.get("/", (req, res, next) => {
  console.log("Middleware logging in ROOT...");
  console.log(adminData.products)
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
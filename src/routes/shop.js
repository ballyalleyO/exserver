const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require("../../helper/path");

//Method GET
//URL /
router.get("/", (req, res, next) => {
  console.log("Middleware logging in ROOT...");
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
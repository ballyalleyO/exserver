const  Product = require('../models/Product')

//method GET
//url
exports.getAddProduct = (req, res, next) => {
    res.render("shopping-cart", {
    pageTitle: "Add Product",
    path: "admin/cart",
    activeAddProduct: true,
  });
}

//method POST
//url
exports.postAddProduct = (req, res, next) => {
const product =  new Product(req.body.title)
  product.save();
  res.redirect("/");
};


//method POST
//url
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
        res.render("shop", {
          prods: products,
          pageTitle: "Shop",
          path: "/",
          hasProducts: products.length > 0,
          activeShop: true,
        });
    });
  console.log("Middleware logging in ROOT...");
};
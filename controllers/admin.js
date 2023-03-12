const Product = require("../models/Product");

const ADMIN = "admin/add-product";
const PRODUCTS = "admin/products";


//method GET
//url
exports.getAddProduct = (req, res, next) => {
  res.render(ADMIN, {
    pageTitle: "Add Product",
    path: "admin/add-product",
    activeAddProduct: true,
  });
};

//method POST
//url
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render(PRODUCTS, {
            prods: products,
            path: 'admin/products',
            pageTitle: 'Admin: Products'
        })
    })
}
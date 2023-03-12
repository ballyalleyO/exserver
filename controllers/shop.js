const  Product = require('../models/Product')

const SHOP = "shop/product-list"
const INDEX = "shop/index"
const CART = "shop/cart"
const CHECKOUT = "shop/checkout";


//method POST
//url
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
        res.render(SHOP, {
          prods: products,
          pageTitle: "Shop",
          path: "/products",
        });
    });
  console.log("Middleware logging in ROOT...");
};


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
        res.render(INDEX, {
          prods: products,
          pageTitle: "Shop",
          path: "/"
        });
    });
  console.log("Middleware logging in INDEX...");
};


exports.getCart = (req, res, next) => {
  res.render(CART, {
    path: '/cart',
    pageTitle: "Cart"
  })
};

exports.getCheckout = (req, res, next) => {
  res.render(CHECKOUT, {
    path: '/checkout',
    pageTitle: 'Checkout'
  })

};
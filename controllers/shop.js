const Product = require('../models/Product')
const Cart = require('../models/Cart')

const SHOP = "shop/product-list"
const INDEX = "shop/index"
const CART = "shop/cart"
const CHECKOUT = "shop/checkout";
const ORDERS = "shop/orders";
const DETAILS = "shop/product-details";

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

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render(DETAILS, {
      pageTitle: product.title,
      product: product,
      path: '/products'
    })
  })
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

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price)
  })
  res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render(ORDERS, {
    path: "/orders",
    pageTitle: "Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render(CHECKOUT, {
    path: '/checkout',
    pageTitle: 'Checkout'
  })

};



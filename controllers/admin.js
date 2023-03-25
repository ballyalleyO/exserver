const Product = require("../models/Product");

const EDIT = "admin/edit-product";
const PRODUCTS = "admin/products";


//method GET
//url
exports.getAddProduct = (req, res, next) => {
  res.render(EDIT, {
    pageTitle: "Add Product",
    path: "admin/add-product",
    editing: false
  });
};

//method POST
//url
exports.postAddProduct = (req, res, next) => {
  let title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);

  product.save();
  res.redirect("/");
};

//method GET
//url /edit-product/:productId
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    return res.redirect('/')
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/')
    }
    res.render(EDIT, {
      pageTitle: "Edit Product",
      path: EDIT,
      editing: editMode,
      product: product
    });
  })
}


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render(PRODUCTS, {
            prods: products,
            path: 'admin/products',
            pageTitle: 'Admin: Products'
        })
    })
}
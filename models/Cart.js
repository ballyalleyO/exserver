const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");



class Cart {
    static addProduct(id, productPrice) {
        //fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
          let cart = {
            products: [],
            totalPrice: 0,
          };
          if (!err) {
            cart = JSON.parse(fileContent);
          }
          //analyze the cart, find the existing product
          const existProductIndex = cart.products.findIndex(
            (prod) => prod.id === id
          );
          const existProduct = cart.products[existProductIndex];
          // update the total proce
          let updatedProduct;
          if (existProduct) {
            updatedProduct = { ...existProduct };
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[existProductIndex] = updatedProduct;
          } else {
            updatedProduct = {
              id: id,
              qty: 1,
            };
            cart.products = [...cart.products, updatedProduct];
          }
          //parse the product price  before adding to the database
          productPrice = productPrice.replace("$", "");
          productPrice = productPrice.replace(",", "");

        let productPriceParsed = parseFloat(productPrice);

          cart.totalPrice = cart.totalPrice + +productPriceParsed;

          fs.writeFile(p, JSON.stringify(cart), (err) => {
            console.log(err);
          });
        })
    }
}





module.exports = Cart;
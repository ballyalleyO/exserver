const express = require('express');

const app = express();

const PORT = 8000;

console.log(`Server is listening to PORT: ${PORT}`)

app.use('/', (req, res, next) => {
    console.log('Middleware logging');
    next()
})

app.use("/shopping-cart", (req, res, next) => {
  console.log("Middleware logging in CART");
  res.send("<h1>Server Test 2</h1>");
});

app.use('/users', (req, res,next) => {
     console.log("Middleware logging in USERS");
    req.body = {name: 'John', age: 30};
    next()
})

app.use('/users', (req, res, next) => {
    console.log("Middleware logging in USERS 2");

    const data = JSON.stringify(req.body);
    console.log(data)
    res.send(`<h1>${data}</h1>`)
})


app.listen(PORT)
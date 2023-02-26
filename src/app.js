const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const PORT = 8000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

  console.log(`Server is listening to PORT: ${PORT}...`)

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, 'views', 'not-found.html'))
})


app.listen(PORT)
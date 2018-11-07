//app.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.routes');
const views = require('./routes/views.routes');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:fpEvTQWv5iYnZzha@127.0.0.1:27017/productstutorial?authSource=admin', {
  useNewUrlParser: true,
  connectTimeoutMS: 750,
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/products', product);

app.set('view engine', 'pug');
app.use('/', views);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
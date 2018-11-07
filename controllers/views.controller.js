const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.products_list = function (req, res, next) {
    Product.find({}, (err, docs) => {
        if (err) {
            return next(err);
        }
        
        res.render('index', {products: docs})
    })
};
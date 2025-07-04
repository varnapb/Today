const mongoose = require('mongoose');

var schema = mongoose.Schema({
    Name : String,
    Price : Number,
    Description : String,
    Image : String
})

var ProductModel = mongoose.model("Product",schema)
module.exports = ProductModel
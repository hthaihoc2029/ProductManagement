const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String.fromCharCode,
  description: String,
  price: Number,
  discountPercentage: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;

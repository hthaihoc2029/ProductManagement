const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/products-test");

const app = express();
const port = 3000;

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  thumbnail: String,
});

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Trang chủ",
    message: "Xin chào các bạn",
  });
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.render("products.pug", {
    title: "San pham",
    products: products,
  });
});
app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sach bai viet</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Trang lien he</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const Product = require("../../models/product.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: !req.query.status ? "active" : "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: req.query.status == "active" ? "active" : "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: req.query.status == "inactive" ? "active" : "",
    },
  ];

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.title = regex;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};

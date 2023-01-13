const path = require("path");
const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

const products = [];

// /admin/add-product GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html")); //express with no templating engine
  // res.render("add-product.pug", {docTitle: "Add Product", path: "/admin/add-product"}); //pug templating engine

  // res.render("add-product.handlebars", {
  //   docTitle: "Add Product",
  //   path: "/admin/add-product",
  //   activeAddProduct: true,
  //   formsCSS: true
  // }); //handlebars templating engine
  
  res.render("add-product.ejs", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true
  }); //ejs templating engine
});

// /admin/add-product POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;

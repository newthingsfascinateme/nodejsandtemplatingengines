const path = require("path");
const rootDir = require("../util/path");

const adminRoutes = require("./admin");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html")); //express with no templating engine
  // res.render("shop.pug", {products: adminRoutes.products, docTitle: "My Shop", path: "/"}); //pug templating engine

  // res.render("shop.handlebars", {
  //   products: adminRoutes.products,
  //   docTitle: "My Shop",
  //   path: "/",
  //   hasProducts: adminRoutes.products.length !== 0,
  //   activeShop: true,
  //   productCSS: true
  // }); //handlebars templating engine

  res.render("shop.ejs", {
    products: adminRoutes.products,
    docTitle: "My Shop",
    path: "/",
    hasProducts: adminRoutes.products.length !== 0,
    activeShop: true,
    productCSS: true
  }); //ejs templating engine
});

module.exports = router;

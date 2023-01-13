const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const rootDir = require("./util/path");

// const expressHandlebars = require("express-handlebars");

const app = express();

// app.set("view engine", "pug");
// app.set("views", "views");

// app.engine("handlebars", expressHandlebars({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: "handlebars"})); // providing a certain extension to the imported handlebars and setting them as view engine
// app.set("view engine", "handlebars");
// app.set("views", "views");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html")); //express with no templating engine
  // res.status(404).render("404.pug", {docTitle: "Error"}); //pug templating engine
  // res.status(404).render("404.handlebars", {docTitle: "Error"}); //handlebars templating engine
  res.status(404).render("404.ejs", {docTitle: "Error"}); //ejs templating engine
})

app.listen(3000);

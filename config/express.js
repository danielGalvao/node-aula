var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var exValidator = require("express-validator");


module.exports = () => {
  var app = express();

  app.use(express.static('./app/public'));
  app.set("view engine", "ejs");
  app.set("views", "./app/views/");

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(exValidator());

  load("routes",{cwd: "app"})
    .then("infra")
    .into(app)

  return app;
}

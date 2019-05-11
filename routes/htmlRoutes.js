var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("home")
  });

  // Load example page and pass in an example by id
  app.get("/input", function(req, res){
    res.render("input")
  });

  app.get("charts", function(req, res){
    res.render("charts");
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("/layouts/404");
  });
};

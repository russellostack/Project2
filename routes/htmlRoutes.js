var db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    if (req.isAuthenticated()) {
      var user = {
        id: req.session.passport.user_id,
        isloggedin: req.isAuthenticated()
      }
      res.render("index", user);
    }
    else {
      res.render("index");
    }
  });

  // Load example page and pass in an example by id
  app.get("/input", function (req, res) {
    // if (req.isAuthenticated()) {
    //   var user = {
    //     id: req.session.passport.user_id,
    //     isloggedin: req.isAuthenticated()
    //   }
      res.render("input");
    // }
    // else {
    //   res.render("index");
    // }
  });

  app.get("/charts", function (req, res) {
    // if (req.isAuthenticated()) {
    //   var user = {
    //     id: req.session.passport.user_id,
    //     isloggedin: req.isAuthenticated()
    //   }
    // res.render("charts", user);
    res.render("layouts/charts");
  });
  // else {
  //   res.render("index");
  // }

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("layouts/404");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
};


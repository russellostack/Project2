var db = require("../models");


module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      var hbsObject = {
        Users: data
      };
      console.log(data)
      res.render("index", hbsObject);
    });
  });

  app.get("/", function (req, res) {
    db.activities.findAll({ where: { id: req.params.id } }).then(function (data) {
      var hbsObject = {
        Users: data
      };
      console.log(data)
      res.render("index", hbsObject);
    });
  });

  // Get all examples
  app.get("/api/users", function (req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};

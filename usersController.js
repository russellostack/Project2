var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var users = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  users.all(function(data) {
    var hbsObject = {
      users: data
    };
    res.render("index", hbsObject);
  });
});

// router.post("/api/cats", function(req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   var id = req.params.id;
//   burger.update({devoured: req.body.devoured}, condition, function(result) {
//     if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
module.exports = router;

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

  app.get("/api/workouts/:id", function (req, res) {
    db.Activities.findAll({ where: { id: req.params.id } }).then(function (data) {
      var hbsObject = {
        Activities: data
      };
      console.log(data)
      res.render("layouts/charts", hbsObject);
    });
  });

  // app.get("/api/charts/:id", function (req, res) {


//     var new_friend = req.body;
//     var friendScores = new_friend.scores
//     var friendMatch = {
//         name: "",
//         photo: "",
//         scoreDifference: 1000
//     };
//     var totalDifference = 0;
//     for (var i = 0; i < friends.length; i++) {
//         totalDifference = 0;
//         for (var j = 0; j < 10; j++) {
//             totalDifference += Math.abs(parseInt(friendScores[j]) - (friends[i].scores[j]));
//         }
//         if (totalDifference <= friendMatch.scoreDifference) {
//             friendMatch.name = friends[i].name;
//             friendMatch.photo = friends[i].photo;
//             friendMatch.scoreDifference = totalDifference
//         }
//     }
//     friends.push(new_friend);
//     res.json(friendMatch);
// });

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

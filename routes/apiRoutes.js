var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // // Otherwise the user will be sent an error
  // app.post("/api/signin", passport.authenticate("local"), function(req, res) {
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  //   res.json("/input");
  // });




  // gets list of users //
  app.get("/api/userGet", function (req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    })
  })

  // gets list of user specific activities //
  app.get("/api/activitiesGet/:user_id", function (req, res) {
    db.Activities.findAll({
      limit: 10,
      where: {
        user_id: req.params.user_id
      }
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });


  //get user specific calorie/food data
  app.get("/api/caloriesGet/:user_id", function (req, res) {
    db.Calories.findAll({
      limit: 10,
      where: {
        user_id: req.params.user_id
      }
    }).then(function (dbCalories) {
      res.json(dbCalories);
    });
  });

  //get user specific weight data
  app.get("/api/userweightGet/:user_id", function (req, res) {
    db.Userweights.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function (dbUserweight) {
      res.json(dbUserweight);
    });
  });

  // get data for Charts displays
  app.get("/api/userdataGet/:user_id", function (req, res) {
    var activities_hbsObject = [];
    var calories_hbsObject = [];
    var weights_hbsObject = [];
    db.Activities.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
      where: {
        user_id: req.params.user_id,
      }
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        activities_hbsObject.push(data[i].dataValues);
      }
    });
    db.Calories.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
      where: {
        user_id: req.params.user_id,
      }
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        calories_hbsObject.push(data[i].dataValues);
      }
      // res.render("layouts/charts", {
      //   Activities: activities_hbsObject,
      //   Calories: calories_hbsObject

      // })
    });
    db.Userweights.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
      where: {
        user_id: req.params.user_id,
      }
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        weights_hbsObject.push(data[i].dataValues);
      }
      res.render("layouts/charts", {
        Activities: activities_hbsObject,
        Calories: calories_hbsObject,
        Weights: weights_hbsObject
      })
    });
    return {
      Activities: activities_hbsObject,
      Calories: calories_hbsObject,
      Weights: weights_hbsObject
    }
  });

  ////////// POSTS ///////////

  // new user api post
  app.post("/api/userCreate", function (req, res) {
    db.Users.create({
      username: req.body.username,
      password: req.body.password,
      starting_weight: req.body.starting_weight,
      target_weight: req.body.target_weight
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

  // user specific calorie input post
  app.post("/api/caloriePost", function (req, res) {
    db.Calories.create({
      user_id: req.body.user_id,
      food_name: req.body.food_name,
      total_cal_con: req.body.total_cal_con
    }).then(function (dbCalories) {
      res.json(dbCalories);
    })
  });

  //user based activity input post
  app.post("/api/activityPost", function (req, res) {
    db.Activities.create({
      user_id: req.body.user_id,
      activity_name: req.body.activity_name,
      activity_quantity: req.body.activity_quantity,
      activity_date: req.body.activity_date,
      total_cal_burn: req.body.total_cal_burn
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });

  //"update" current user weight by posting to user weight table.
  app.post("/api/userweightPost", function (req, res) {
    db.Userweights.create({
      user_id: req.body.user_id,
      user_weight: req.body.user_weight,
    }).then(function (dbUserweight) {
      res.json(dbUserweight);
    });
  });
};
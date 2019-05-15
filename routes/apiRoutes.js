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

  app.get("/api/home", function(req,res){
    db.Users.findAll({}).then(function(dbUsers){
      res.json(dbUsers);
    })
  })

  // gets list of user specific activities //

  app.get("/api/activitiesGet/:user_id", function (req, res) {
    db.Activities.findAll({
      limit: 10,
      where:
        { user_id: req.params.user_id }
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });


  //get user specific calorie/food data


  app.get("/api/caloriesGet/:user_id", function (req, res) {
    db.Calories.findAll({
      limit:10,
      where:
        { user_id: req.params.user_id }
    }).then(function (dbCalories) {
      res.json(dbCalories);
    });
  });

  //get user specific weight data


  app.get("/api/userweightGet/:user_id", function (req, res) {
    db.Userweights.findAll({
      where:
        { user_id: req.params.user_id }
    }).then(function (dbUserweight) {
      res.json(dbUserweight);
    });
  });



////////// POSTS ///////////

  // new user api post
  app.post("/api/signin", function (req, res) {
    db.Users.create({
      username: req.body.username,
      password: req.body.password,
      starting_weight: req.body.starting_weight,
      target_weight: req.body.target_weight
      //  
      //not sure how to initialize the created_at and updated_at fields

    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

  // user specific calorie input post
  app.post("/api/caloriePost/:user_id", function (req, res) {
    db.Calories.create({
      user_id: req.body.user_id,
      food_name: req.body.food_name,
      food_date: req.body.food_date,
      total_cal_con: req.body.total_cal_con
    }).then(function(dbCalories){
      res.json(dbCalories);
    })
  });

  //user based activity input post
  app.post("/api/activityPost/:user_id", function (req, res) {
    db.Activities.create({
      user_id: req.body.user_id,
      activity_name: req.body.activity_name,
      activity_quantity: req.bdy.activity_quantity,
      actifity_date: req.body.activity_date,
      total_cal_burn: req.body.total_cal_burn
    }).then(function(dbActivities){
      res.json(dbActivities);
    });
  });

  //"update" current user weight by posting to user weight table.
  app.post("/api/userweightPost/:user_id", function (req, res) {
    db.Userweights.create({
      user_id: req.body.user_id,
      user_weight: req.body.user_weight,
      input_time: req.body.input_time,
    }).then(function(dbUserweight){
      res.json(dbUserweight);
    });
  });
};
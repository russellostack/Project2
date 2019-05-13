var db = require("../models");


module.exports = function (app) {

  //gets list of users and displays it on the sign in page
  app.get("/api/home/", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      var hbsObject = {
        Users: data
      };
      console.log(data)
      res.json(data);
    });
  });

  app.get("/api/activities/:user_id", function (req, res) {
    db.Activities.findAll({
      where:
        { user_id: req.params.user_id }
    }).then(function (data) {
      var activities_hbsObject = {
        Activities: data
      };
      var totalCalories = 0;
      for (var i = 0; i < data.length; i++) {
        totalCalories = (totalCalories + parseInt(data[i].total_cal_burn));
      }
      console.log("here's your total calories expended over the past five days " + totalCalories);
      res.json(data);
    });
  });

  //get user activities, user calories, and user weight for charts page

  app.get("/api/calories/:user_id", function (req, res) {
    // find all user calories
    db.Calories.findAll({
      where:
        { user_id: req.params.user_id }
    }).then(function (data) {
      var calories_hbsObject = {
        Calories: data
      };
      res.json(data);
    });
  });
    app.get("/api/weights/:user_id", function (req, res) {
    //find all user weight
    db.Userweights.findAll({
      where:
        { user_id: req.params.user_id }
    }).then(function (data) {
      var user_weight_hbsObject = {
        user_weight: data
      };
      res.json(data);
    });
  });
  
    //new user api post
    app.post("/api/input", function (req, res) {
      db.users.create({
        username: req.body.username,
        password: req.body.password,
        starting_weight: req.body.starting_weight,
        target_weight: req.body.target_weight
        //  
        //not sure how to initialize the created_at and updated_at fields

      });
    });

    // user based calorie input post
    app.post("/api/input/:user_id", function (req, res) {
      db.calories.create({
        user_id: req.body.user_id,
        food_name: req.body.food_name,
        food_date: req.body.food_date,
        total_cal_con: req.body.total_cal_con
      });
    });

    //user based activity input post
    app.post("/api/input/:user_id", function (req, res) {
      db.activities.create({
        user_id: req.body.user_id,
        activity_name: req.body.activity_name,
        activity_quantity: req.bdy.activity_quantity,
        actifity_date: req.body.activity_date,
        total_cal_burn: req.body.total_cal_burn
      });
    });

    //"update" current user weight by posting to user weight table.
    app.post("/api/user_weight/:user_id", function (req, res) {
      db.user_weight.create({
        user_id: req.body.user_id,
        user_weight: req.body.user_weight,
        input_time: req.body.input_time,

      })
    });
};
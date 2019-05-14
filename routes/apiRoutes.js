var db = require("../models");


module.exports = function (app) {

  //gets list of users and displays it on the sign in page -  not needed if we use passport
  app.get("/api/home/", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      var hbsObject = {
        Users: data
      };
      res.json(hbsObject);
    });
  });


  // gets list of user specific activities 


  app.get("/api/activities/:user_id", function (req, res) {
    db.Activities.findAll({
      limit: 10,
      order: [['created_At', 'DESC']],
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
      res.json(activities_hbsObject);
    });
  });


  //get user specific calorie/food data


  app.get("/api/calories/:user_id", function (req, res) {
    db.Calories.findAll({
      order: [['created_At', 'DESC']],
      where:
        { user_id: req.params.user_id }
    }).then(function (data) {
      var calories_hbsObject = {
        Calories: data
      };
      res.json(calories_hbsObject);
    });
  });

  //get user specific weight data


  app.get("/api/userweight/:user_id", function (req, res) {
    db.Userweight.findAll({
      order: [['createdAt', 'DESC']],
      where:
        { user_id: req.params.user_id }
    }).then(function (data) {
      var user_weight_hbsObject = {
        user_weight: data
      };
      res.json(user_weight_hbsObject);
    });
  });



////////// POSTS ///////////

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

  // user specific calorie input post
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
  app.post("/api/input/:user_id", function (req, res) {
    db.user_weight.create({
      user_id: req.body.user_id,
      user_weight: req.body.user_weight,
      input_time: req.body.input_time,

    })
  });

/////////// should move to app.js /////////

  app.get("/charts/:user_id", function (req, res) {
    var activities_hbsObject = [];
    var calories_hbsObject = [];
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
      console.log(activities_hbsObject)
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
      console.log(calories_hbsObject)
      res.render("layouts/charts", {
        Activities: activities_hbsObject,
        Calories: calories_hbsObject
      })
    });
  });
};
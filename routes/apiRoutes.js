var db = require("../models");


module.exports = function (app) {


  // gets list of user specific activities //

  app.get("/api/activitiesGet/:user_id", function (req, res) {
    db.Activities.findAll({
      limit: 10,
      order: [['created_At', 'DESC']],
      where:
        { user_id: req.params.user_id }
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });


  //get user specific calorie/food data


  app.get("/api/caloriesGet/:user_id", function (req, res) {
    db.Calories.findAll({
      order: [['created_At', 'DESC']],
      where:
        { user_id: req.params.user_id }
    }).then(function (dbCalories) {
      res.json(dbCalories);
    });
  });

  //get user specific weight data


  app.get("/api/userweightGet/:user_id", function (req, res) {
    db.Userweight.findAll({
      order: [['createdAt', 'DESC']],
      where:
        { user_id: req.params.user_id }
    }).then(function (dbUserweight) {
      res.json(dbUserweight);
    });
  });



////////// POSTS ///////////

  //new user api post
  app.post("/api/signin", function (req, res) {
    db.users.create({
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
    db.calories.create({
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
    db.activities.create({
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
    db.user_weight.create({
      user_id: req.body.user_id,
      user_weight: req.body.user_weight,
      input_time: req.body.input_time,
    }).then(function(dbUserweight){
      res.json(dbUserweight);
    });
  });
};
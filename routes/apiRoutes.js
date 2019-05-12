var db = require("../models");


module.exports = function (app) {


  app.get("/api/users/", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      var hbsObject = {
        Users: data
      };
      console.log(data)
      res.render("index", hbsObject);
    });
  });

  //get user activities for charts page
  app.get("/api/activities/:user_id", function (req, res) {
    db.activities.findAll({
       where: 
      { id: req.params.user_id }
     }).then(function (data) {
      var hbsObject = {
        Activities: data
      };
      res.render("charts", hbsObject);
    });
  });

  // get user_calories for charts page
  app.get("/api/calories/:user_id", function(req,res){
    db.calories.findAll({
      where: 
      {id: req.params.user_id}
    }).then(function(data){
      var hbsObject = {
        calories: data
      };
      res.render("charts", hbsObject);
    });
  });

  //get user_weight for charts page
  app.get("/api/user_weight/:user_id", function(req,res){
    db.user_weight.findAll({
      where:
      {user_ud: req.params.user_id},
    }).then(function(data){
      var hbsObject = {
        user_weight: data
      };
      res.render("charts", hbsObject);
    });
  });

  //new user api post
  app.post("/api/users", function(req,res){
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      username: req.body.username,
      password: req.body.password,
      starting_weight: req.body.starting_weight,
      target_weight:req.body.target_weight
      //  
      //not sure how to initialize the created_at and updated_at fields

    });
  });

  // user based calorie input post
  app.post("/api/calories/:user_id", function(req,res){
    db.Post.create({
      title:req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
      food_name: req.body.food_name,
      food_date: req.body.food_date,
      total_cal_con: req.body.total_cal_con
    });
  });

  //user based activity input post
  app.post("/api/activities/:user_id", function(req,res){
    db.Post.create({
      title:req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
      activity_name: req.body.activity_name,
      activity_quantity: req.bdy.activity_quantity,
      actifity_date: req.body.activity_date,
      total_cal_burn: req.body.total_cal_burn
    });
  });

  //"update" current user weight by posting to user weight table.
  app.post("/api/user_weight/:user_id", function(req,res){
    db.Post.create({
      title:req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
      user_weight: req.body.user_weight,
      input_time: req.body.input_time
    })
  })


  
};

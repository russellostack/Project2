var express = require("express");
var router = express.Router();
var activities = require("../models/activities.js");
var calories = require("../models/calories.js");
var index = require("../models/index.js");
var user_weight = require("../models/user_weight.js");
var users = require("../models/users.js");

//specific user id get for info page
router.get("/api/info/:user_id", function(req,res){
    var condition = "id = "+ req.params.id;
    user_weight.get(function(data){
        var wObj = {
            user_weight: data
        };
        res.render("index", wObj);
    })
});

module.exports = router;
var api = {
    caloriePost: function (data, user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/caloriePost/" + user_id,
            type: "POST",
            data: data
        })
    },
    activityPost: function (data, user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/activityPost/" + user_id,
            type: "POST",
            data: data
        })
    },
    userweightPost: function (data, user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/userweightPost/" + user_id,
            type: "POST",
            data: data
        })
    },
};
var foodbuttonclick = function () {
    console.log(("#food-input").val());
    var foodName = {
        name: $("#food-input").val().trim(),
    };
    foodName.replace(" ", "%20");
    var queryURL = "'https://api.edamam.com/api/food-database/parser?ingr=" + foodName + "&app_id={2cea8c5e}&app_key={3742da7bb611e71fab3e49e361fdbb55}"

    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function (response) {
        total_cal_con = response.hints[0].food.nutrients.ENERC_KCAL;
        food_name = response.hints[0].food.label;
        api.caloriePost(total_cal_con)

        var data = {total_cal_con, food_name};
        api.caloriePost(data);
    });
};
var activitybuttonclick = function(){
    var activityType = $("#activity-type-input").val().trim();
    var activityAmount = $("#activity-amt-input").val().trim();
    var data = {activityAmount, activityType};
    api.activityPost(data);
};
var weightbuttonclick = function(){
    var user_weight = $("#weight-input").val().trim();
    api.userweightPost(user_weight);
};


$("#food-submit").click(foodbuttonclick());
$("#activity-submit").click(activitybuttonclick());
$("#weight-submit").click(weightbuttonclick());
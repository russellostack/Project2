
$(document).ready(function () {
    $("#food-button").click(function () {
        event.preventDefault();
        var foodName = {
            name: $("#food-input").val().trim(),
        };
        foodName.replace(" ", "%20");
        var queryURL = "'https://api.edamam.com/api/food-database/parser?ingr=" + foodName + "&app_id={2cea8c5e}&app_key={3742da7bb611e71fab3e49e361fdbb55}"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            total_cal_con = response.hints[0].food.nutrients.ENERC_KCAL;
            food_name = response.hints[0].food.label;
        });
    });
});

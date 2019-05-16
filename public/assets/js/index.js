// import { json } from "sequelize/types";

$(document).ready(function () {

    // Random quotation module ================================================
    var Quotes = [{
        quote: "In fitness, there are no short cuts. It involves immense discipline and hard work",
        author: "Mahesh Babu"
    },
    {
        quote: "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted",
        author: "Denis Waitley"
    },
    {
        quote: "For me, fitness is not just about hitting the gym; it is also about an inner happiness and an overall well-being",
        author: "Rakul Preet Singh"
    },
    {
        quote: "Fitness is not about being better than someone else... It's about being better than you used to be",
        author: "Khloe Kardashian"
    },
    {
        quote: "Fitness helps me think better, feel better, and move better",
        author: "Jason Winston George"
    },
    {
        quote: "True enjoyment comes from activity of the mind and exercise of the body; the two are ever united",
        author: "Wilhelm von Humboldt"
    },
    {
        quote: "A muscle is like a car. If you want it to run well early in the morning, you have to warm it up",
        author: "Florence Griffith Joyner"
    },
    {
        quote: "You can always improve your fitness if you keep training",
        author: "Pastor Maldonado"
    },
    {
        quote: "It's so easy to lose your fitness and so hard to gain it back",
        author: "Alex Morgan"
    },
    {
        quote: "You can't be fat and fast, too; so lift, run, diet and work",
        author: "Hank Stram"
    },
    {
        quote: "For me, fitness is a part of my everyday life. But fitness does not mean having big muscles; it means being active, quick, and flexible. It can be defined in many terms",
        author: "Varun Dhawan"
    }
    ];
    var rn;

    randomNumberGenerator();

    $("#fq").text(Quotes[rn].quote);
    $("#fqa").text(Quotes[rn].author);

    function randomNumberGenerator() {
        rn = Math.floor(Math.random() * Math.floor(Quotes.length));
        return rn;
    };

    // Curren year generator ===================================================
    function yearGenerator() {
        $('#year').text(new Date().getFullYear());
    };

    yearGenerator();



    var api = {
        userCreation: function (user) {
            return $.ajax({
                headers: { "Content-type": "application/json" },
                url: "api/userCreate",
                type: "POST",
                data: user
            })
        },
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
        activitiesGet: function (user_id) {
            return $.ajax({
                headers: { "Content-type": "application/json" },
                url: "api/activitiesGet/" + user_id,
                type: "GET"
            })
        },
        caloriesGet: function (user_id) {
            return $.ajax({
                headers: { "Content-type": "application/json" },
                url: "api/caloriesGet/" + user_id,
                type: "GET",
            })
        },
        userweightGet: function (user_id) {
            return $.ajax({
                headers: { "Content-type": "application/json" },
                url: "api/userweightGet/" + user_id,
                type: "GET"
            })
        },
        userGet: function () {
            return $.ajax({
                headers: { "Content-type": "application/json" },
                url: "api/userGet",
                type: "GET"
            })
        }
    };


    ///////////// sign in page /////////////////


    ///////////// sign in button //////////////


    $(function () {

        /////////////// page change button listeners /////////

        $('.inputpagelink').click(function () {
            window.location = 'http://www.localhost:3000/input';
        });
        $(".chartspagelink").click(function () {
            window.location = "http://www.localhost:3000/charts"
        });
        $(".homepagelink").click(function () {
            window.location = "http://www.localhost:3000"
        })

        //////// new user modal button listener /////////////
        $("#new-user-bnt").click(function () {
            event.preventDefault();
            $("#new-user-modal").modal("show");
        });

        //////////// new user submit button listener //////////////////


        $("#newusermodalbtn").on("click", function () {
            event.preventDefault();
            var data = {
                user_name: $("#inputNewUserName").val().trim(),
                password: $("#inputNewPassword").val().trim(),
                current_weight: $("#inputCurrentWeight").val().trim(),
                target_weight: $("#inputTargetWeight").val().trim()
            };
            api.userCreation(data);
            $('#new-user-modal').modal('hide');
            window.location = 'http://www.localhost:3000/input';
        });


        //////// sign in button listener /////////////


        $("#sign-in-btn").on("click", function () {
            event.preventDefault();
            $("#sign-in-modal").modal("show");
            // When "sign in" MODAL is ready - input validation:
            $("#sign-in-modal").ready(function () {
                console.log("validator");
                $("#signinmodalbtn").click(function () {
                    event.preventDefault();
                    var input = $("#inputUserName").val().trim();
                    var form = $("#sign-in-modal-form").val().trim();
                    if (input[0].checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.addClass("was-validated");
                });
            });
            console.log("sign in button clicked/validated");
            window.location = 'http://www.localhost:3000/input';
        });

        ////////////// food submit listener /////////////

        $("#food-submit").click(function () {
            var foodName = {
                name: $("#food-input").val().trim(),
            };
            foodName.replace(" ", "%20");
            var queryURL = "'https://api.edamam.com/api/food-database/parser?ingr=" + foodName + "&app_id={2cea8c5e}&app_key={3742da7bb611e71fab3e49e361fdbb55}"

            $.ajax({
                url: queryURL,
                method: "POST"
            }).then(function (response) {
                total_cal_con = { total_cal_con: response.hints[0].food.nutrients.ENERC_KCAL };
                food_name = { food_name: response.hints[0].food.label };
                var data = { total_cal_con, food_name };
                api.caloriePost(data);
                console.log("food submitted!");
            });
        });

        ////////////// activity submit listener //////////////

        $("#activity-submit").click(function () {
            var activity_name = { activity_name: $("#activity-type-input").val().trim() };
            var activity_quantity = { activity_quantity: $("#activity-amt-input").val().trim() };
            var data = { activity_name, activity_quantity };
            api.activityPost(data);
            console.log("activity submitted!");
        });

        /////////////////// weight submit listener //////////////////

        $("#weight-submit").click(function () {
            var user_weight = $("#weight-input").val().trim();
            api.userweightPost(user_weight);
            window.location = "http://www.localhost:3000/charts";

        });

        ////////////////  charts page listener ////////////////


    });
});














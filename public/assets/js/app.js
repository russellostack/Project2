$(document).ready(function () {

    var userName = "";

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
    // =========================================================================

    // Click events ============================================================
    // Signing in button:
    $("#sign-in-btn").click(function () {
        event.preventDefault();
        $("#sign-in-modal").modal("show");
        $("#inputUserName").val("");
        $("#inputPassword").val("");

        // When "sign in" MODAL is ready - input validation:
        $("#sign-in-modal").ready(function () {
            console.log("validator");
            $("#signinmodalbtn").click(function () {
                event.preventDefault();
                var input = $("#inputUserName");
                var form = $("#sign-in-modal-form");
                if (input[0].checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.addClass("was-validated");
            });
        });
    });

    // "Create new user" button click event:
    $("#new-user-bnt").click(function () {
        event.preventDefault();
        $("#new-user-modal").modal("show");

        // When "create new user" MODAL is ready - input validation:
        $("#new-user-modal").ready(function () {
            console.log("validator");
            $("#newusermodalbtn").click(function () {
                event.preventDefault();
                var input = $("#inputNewUserName");
                var form = $("#new-user-modal-form");
                if (input[0].checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.addClass("was-validated");
            });
        });
    });

    // =========================================================================
});

        // userName = $("#inputUserName").val().trim();
        // var $newRow = $("<div>");
        // $newRow.attr("id", "user-data");
        // $newRow.addClass("row");
        // var $newDiv = $("<div>");
        // $newDiv.addClass("col-md-12");
        // var $newDiv2 = $("<div>");
        // $newDiv2.addClass("demo-content");
        // $newDiv.append($newDiv2);
        // var $newPar = $("<p>");
        // $newPar.attr("id", "hello");
        // $newPar.text("Hello, " + userName + "!");
        // $newDiv2.append($newPar);
        // Adding input form for foods:
        // var newForm = $("<form>");
        // var divForm = $("<div>");
        // divForm.addClass("form-group");
        // var label1 = $("<label>Today's food consumption</label>");
        // var input1 = $("<input>");
        // input1.addClass("form-control");
        // input1.attr("id", "input-food");
        // input1.attr("placeholder", "input today's food you consumed and the amount");
        // divForm.append(label1);
        // divForm.append(input1);
        // newForm.append(divForm);
        // $newDiv2.append(newForm);
        // Adding input form for exercise type:
        // var newForm2 = $("<form>");
        // var divForm2 = $("<div>");
        // divForm2.addClass("form-group");
        // var label2 = $("<label>Exercise</label>");
        // var input2 = $("<input>");
        // input2.addClass("form-control");
        // input2.attr("id", "input-ex");
        // input2.attr("placeholder", "input type of exercise you're doing today");
        // divForm2.append(label2);
        // divForm2.append(input2);
        // newForm2.append(divForm2);
        // $newDiv2.append(newForm2);

        // Adding input form for exercise amount:
        // var newForm3 = $("<form>");
        // var divForm3 = $("<div>");
        // divForm3.addClass("form-group");
        // var label3 = $("<label>Exercise amount</label>");
        // var input3 = $("<input>");
        // input3.addClass("form-control");
        // input3.attr("id", "input-ex-am");
        // input3.attr("placeholder", "input anount of exercise you're doing today");
        // divForm3.append(label3);
        // divForm3.append(input3);
        // newForm3.append(divForm3);
        // $newDiv2.append(newForm3);
        // Adding input form for current weight:
        // var newForm4 = $("<form>");
        // var divForm4 = $("<div>");
        // divForm4.addClass("form-group");
        // var label4 = $("<label>Current weight</label>");
        // var input4 = $("<input>");
        // input4.addClass("form-control");
        // input4.attr("id", "input-cur-weight");
        // input4.attr("placeholder", "input your current weight");
        // divForm4.append(label4);
        // divForm4.append(input4);
        // newForm4.append(divForm4);
        // $newDiv2.append(newForm4);

        // Adding submit button for daily input form:
        // var newBtn2 = $("<button>");
        // newBtn2.attr("id", "daily-submit");
        // newBtn2.attr("type", "button");
        // newBtn2.addClass("btn btn-primary btn-lg");
        // newBtn2.text("Submit");
        // $newDiv2.append(newBtn2);

        // newForm.append("<div class='form-group'>");

        // $newRow.append($newDiv);
        // $(".container").append($newRow);

        // if Sign in success(!) - create "Sing out" button:
        // $("#signinbtn").detach();
        // $("#newuserbnt").detach();
        // var newBtn = $("<button>");
        // newBtn.attr("id", "signoutbtn");
        // newBtn.attr("type", "button");
        // newBtn.addClass("btn btn-primary btn-lg");
        // newBtn.text("Sign out");
        // $("#buttons").append(newBtn);

        // Click event for "Signing Out" button:
        // $("#signoutbtn").click(function () {
        //     event.preventDefault();
        //     // console.log("here");
        //     location.reload(true);
        // });

        // Click event for "Submit" (daily data input) button:
        // $("#daily-submit").click(function () {
        //     console.log("daily-submit");
        //     $("#user-data").empty();
        //     var $newRow = $("<div>");
        //     $newRow.attr("id", "user-data");
        //     $newRow.addClass("row");
        //     var $newDiv = $("<div>");
        //     $newDiv.addClass("col-md-12");
        //     var $newDiv2 = $("<div>");
        //     $newDiv2.addClass("main-content");
        //     $newDiv.append($newDiv2);
        //     var $newPar = $("<p>");
        //     $newPar.attr("id", "progress");
        //     $newPar.text(userName + ", your progress is here:");
        //     $newDiv2.append($newPar);
        //     $newDiv2.append('<img id="fitchart" class="img-fluid" src="../public/assets/images/fitness-chart.jpg"/>');
        //     $newRow.append($newDiv);
        //     $(".container").append($newRow);
        // });
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
    }];
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
    // Signing in:
    $("#sign-in-btn").click(function () {
        event.preventDefault();
        $("#sign-in-modal").modal("show");
        $("#inputUserName").val("");
        $("#inputPassword").val("");
    });

    // Daily data input card creation:
    $("#signinmodalbtn").click(function () {
        event.preventDefault();
        $("#rfq").empty();
        $("#user-input-food").empty();
        $("#sign-in-modal").modal("hide");
        userName = $("#inputUserName").val().trim();

        // Food input ============================================================================================================
        var foodRow = $("<div>");
        foodRow.attr("id", "user-input-food");
        foodRow.addClass("row");
        var foodDiv = $("<div>");
        foodDiv.addClass("col-md-6");
        var newDiv = $("<div>");
        newDiv.addClass("main-content");
        var newPar = $("<p>");
        newPar.attr("id", "hello");
        newPar.text("Hello, " + userName + "!");
        newDiv.append(newPar);
        foodDiv.append(newDiv);
        foodRow.append(foodDiv);
        $(".container").append(foodRow);

        // Input form for food type:
        var foodForm = $("<form>");
        var foodInputDiv = $("<div>");
        foodInputDiv.addClass("form-group");

        var labelFoodType = $("<label>Enter types of food you ate today</label>");
        var inputFoodType = $("<input>");
        inputFoodType.addClass("form-control");
        inputFoodType.attr("id", "input-food-type");
        inputFoodType.attr("placeholder", "food type, etc. chicken");

        var labelFoodAmt = $("<label>Enter amount of food you ate today</label>");
        labelFoodAmt.addClass("mt-3");
        var inputFoodAmt = $("<input>");
        inputFoodAmt.addClass("form-control");
        inputFoodAmt.attr("id", "input-food-amount");
        inputFoodAmt.attr("placeholder", "food amount, g");

        foodInputDiv.append(labelFoodType);
        foodInputDiv.append(inputFoodType);
        foodInputDiv.append(labelFoodAmt);
        foodInputDiv.append(inputFoodAmt);
        foodForm.append(foodInputDiv);
        newDiv.append(foodForm);

        // newForm.append(divForm);
        // $newDiv2.append(newForm);

        // Input form for food amount:
        // var newForm_ = $("<form>");
        // var divForm_ = $("<div>");
        // divForm_.addClass("form-group");
        // var label0 = $("<label>Today's calories consumption</label>");
        // var input0 = $("<input>");
        // input0.addClass("form-control");
        // input0.attr("id", "input-cal");
        // input0.attr("placeholder", "input today's calories amount");
        // divForm_.append(label0);
        // divForm_.append(input0);
        // newForm_.append(divForm_);
        // $newDiv2.append(newForm_);
        //==========================================================================================================

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
    });

    // Creating new user
    $("#newuserbnt").click(function () {
        event.preventDefault();
        $("#newUserModal").modal("show");
    });
    // =========================================================================
});
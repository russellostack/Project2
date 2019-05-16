var api = {
    userCreation: function (user) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/userCreate",
            type: "POST",
            data: user
        })
    }
};
var newuserbutton = function () {
    var user_name = $("#inputNewUserName").val();
    var password = $("#inputNewPassword").val();
    var current_weight = $("#inputCurrentWeight").val();
    var target_weight = $("#inputTargetWeight").val();
    var data = { user_name, password, current_weight, target_weight };
    //api.userCreation(data);
}

$("#newusermodalbtn").click(newuserbutton());

$("#sign-in-btn").click(function () {
    event.preventDefault();
    $("#sign-in-modal").modal("show");
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
    console.log("ive been clicked");
    event.preventDefault();
    $("#new-user-modal").modal("show");

    // When "create new user" MODAL is ready - input validation:
   $("#new-user-modal").ready(function () {
        console.log("validator");
        $("#newusermodalbtn").click(function () {
          console.log('button');
          event.preventDefault();
          var user = {
            username: $('#inputNewUserName').val(),
            password: $('#inputNewPassword').val(),
            starting_weight: $('#inputCurrentWeight').val(),
            target_weight: $('#inputTargetWeight').val()
          }
          console.log(user);
          $.ajax({
            method: 'POST', 
            url: '/api/userCreate',
            data: user
          }).then(function() {
            console.log('things happened');
            $('#new-user-modal').modal('hide');
            })
            
          })
            //var input = $("#inputNewUserName");
            //var form = $("#new-user-modal-form");

           /* if (input[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.addClass("was-validated");*/
        });
    });
//});



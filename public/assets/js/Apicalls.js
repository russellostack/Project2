$(document).ready(function(){
    $("#caloriebtn").click(function(){
        event.preventDefault();
        var foodName = "apple"
        var queryURL = "'https://api.edamam.com/api/food-database/parser?ingr=" + foodName + "&app_id={2cea8c5e}&app_key={3742da7bb611e71fab3e49e361fdbb55}"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });
    });
})
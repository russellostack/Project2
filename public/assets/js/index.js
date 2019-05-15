// import { json } from "sequelize/types";


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
            url: "api/signin",
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
            url: "api/userweightGet/"+ user_id,
            type: "GET"
        })
    }
};

module.exports(api);










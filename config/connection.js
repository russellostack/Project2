var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "trilogy",
    password: "Scrubs99",
    database: "exercise_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: "+err.stack);
        return;
    }
    console.log("connection established as id: "+connection.threadId);
});
module.exports = connection;
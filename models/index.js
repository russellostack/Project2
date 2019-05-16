"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};


var sequelize = new Sequelize({
  "dialect": "mysql",
  "username": "uko7y7z3objabdgs",
  "password": "x4nvxw8h2pygzqk1",
  "database": "xiafakvksxxa48jb",
  "host": "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
});

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

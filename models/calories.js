module.exports = function(sequelize, DataTypes) {
  var Calories = sequelize.define("Calories", {
    food_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      notEmpty: true
    },
    food_quantity: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isDecimal: true,
      notEmpty: true
    },
    total_cal_con: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
  }
});
return Calories;
};
module.exports = function (sequelize, DataTypes) {
  var Calories = sequelize.define("Calories", {
    calorie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmpty: true,
      references: {
        model: 'Users', // Can be both a string representing the table name or a Sequelize model
        key: 'user_id'
      }
    },
    food_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      notEmpty: true
    },
    food_date: {
      type: DataTypes.DATE,
      isAlpha: true,
      notEmpty: true
    },
    total_cal_con: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      isNumeric: true,
      isInt: true
    }
  });
  return Calories;
};
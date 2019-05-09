module.exports = function(sequelize, DataTypes) {
  var UserWeight = sequelize.define("UserWeight", {
    user_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
  }
});
return UserWeight;
};
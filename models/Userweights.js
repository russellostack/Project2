module.exports = function (sequelize, DataTypes) {
  var Userweights = sequelize.define("Userweights", {
    weight_id: {
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
    user_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
    }
  });
  return Userweights;
};

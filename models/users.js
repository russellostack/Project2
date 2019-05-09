module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {
      len: [1]
    }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
      notEmpty: true,
      validate: {
        len: [6]
      }
    },
    starting_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
    } ,
    target_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
    }
  });
  return Users;
};

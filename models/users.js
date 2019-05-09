module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        len: [1]
      }
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   notEmpty: true,
    //   validate: {
    //     len: [6]
    //   }
    // },
    starting_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
    },
    target_weight: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      isInt: true,
      notEmpty: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: true
    }
  });
  return Users;
};

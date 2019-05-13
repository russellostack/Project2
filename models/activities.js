module.exports = function (sequelize, DataTypes) {
  var Activities = sequelize.define("Activities", {
    activity_id: {
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
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activity_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: true
    },
    total_cal_burn: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      isNumeric: true,
      isInt: true
    },
  });
  return Activities;
};

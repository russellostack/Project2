module.exports = function(sequelize, DataTypes) {
  var Activities = sequelize.define("Activities", {
    activity_name: {
      type: DataTypes.STRING,
      notEmpty: true
     },
     activity_quantity: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      isDecimal: true
     },
     total_cal_burn: {
       type: DataTypes.INTEGER,
       notEmpty: true, 
       isNumeric: true,
       isInt: true
     }

});
return Activities;
};
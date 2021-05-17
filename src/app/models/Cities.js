 module.exports = (sequelize, DataTypes) => {

   const Cities = sequelize.define("Cities",{
    city: DataTypes.STRING,
    state: DataTypes.STRING
   });

   Cities.associate = models => {
     Cities.hasMany(models.Customers)
   };

   return Cities;

 }
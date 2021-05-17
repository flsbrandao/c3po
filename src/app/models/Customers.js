module.exports = (sequelize, DataTypes) => {

  const Customers = sequelize.define("Customers",{
    name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    sex:DataTypes.ENUM("M", "F"),
    age: DataTypes.INTEGER, 
    city_id: DataTypes.INTEGER,
  });

  Customers.associate = models => {
    Customers.belongsTo(models.Cities)
  };

 return Customers;

}
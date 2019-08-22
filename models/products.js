module.exports = function(sequelize, DataTypes) {

  const products = sequelize.define("products", {
    product_name: DataTypes.STRING,
    department: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock_quantity: DataTypes.INTEGER,
    available: DataTypes.TINYINT
  });

  return products;
}


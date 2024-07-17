'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Cart, User }) {
      this.belongsToMany(User, { through: Cart, foreignKey: 'productId' });
      this.hasMany(Cart, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};

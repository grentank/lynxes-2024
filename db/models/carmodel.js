'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    static associate({ Brand, Car }) {
      this.belongsTo(Brand, { foreignKey: 'brandId' });
      this.hasMany(Car, { foreignKey: 'modelId' });
    }
  }
  CarModel.init(
    {
      name: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CarModel',
    },
  );
  return CarModel;
};

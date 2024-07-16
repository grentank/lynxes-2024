'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate({ CarModel }) {
      this.belongsTo(CarModel, { foreignKey: 'modelId' });
    }
  }
  Car.init(
    {
      color: DataTypes.STRING,
      engine: DataTypes.FLOAT,
      VIN: DataTypes.STRING,
      modelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Car',
    },
  );
  return Car;
};

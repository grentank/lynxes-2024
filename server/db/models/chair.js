'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chair extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'ownerId' });
    }
  }
  Chair.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      dimensions: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Chair',
    },
  );
  return Chair;
};

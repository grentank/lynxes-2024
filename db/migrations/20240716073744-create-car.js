'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: 'White',
        allowNull: false,
      },
      engine: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      VIN: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      modelId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'CarModels',
          },
          key: 'id',
        },
        allowNull: true,
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  },
};

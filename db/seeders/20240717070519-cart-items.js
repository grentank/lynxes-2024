'use strict';

const { Cart } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cartItems = new Array(100).fill(null).map(() => ({
      userId: Math.floor(Math.random() * 10) + 1,
      productId: Math.floor(Math.random() * 20) + 1,
      quantity: Math.floor(Math.random() * 5) + 1,
    }));
    // {userId:3, productId:5, quantity: 2}
    // {userId:3, productId:5, quantity: 7}
    const cartItemsWithoutRepeats = cartItems.filter((cart, index) => {
      const targetIndex = cartItems.findIndex(
        (el) => el.userId === cart.userId && el.productId === cart.productId,
      );
      return targetIndex === index;
    });

    await Cart.bulkCreate(cartItemsWithoutRepeats);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

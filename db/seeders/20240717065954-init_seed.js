'use strict';

const { Product, User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    await Product.bulkCreate(
      products.map((p) => ({
        name: p.title,
        price: p.price,
        description: p.description,
      })),
    );

    const capitalString = (str) => str[0].toUpperCase() + str.slice(1);

    const resUsers = await fetch('https://fakestoreapi.com/users');
    const users = await resUsers.json();
    await User.bulkCreate(
      users.map((u) => ({
        name: `${capitalString(u.name.firstname)} ${capitalString(u.name.lastname)}`,
        email: u.email,
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};

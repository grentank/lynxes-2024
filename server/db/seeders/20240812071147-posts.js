'use strict';

const { hashSync } = require('bcrypt');
const { Post, User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      { name: 'Alex', email: '1@1', hashpass: hashSync('123', 10) },
      { name: 'Bob', email: '2@2', hashpass: hashSync('123', 10) },
      { name: 'Cindy', email: '3@3', hashpass: hashSync('123', 10) },
    ]);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    await Post.bulkCreate(
      posts.map(({ title, body, userId }) => ({ title, body, userId: (userId % 3) + 1 })),
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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

"use strict";

const { create } = require('domain');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.
    Example: await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Post 1",
          description: "Description post 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Post 2",
          description: "Description post 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Post 3",
          description: "Description post 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    //Add commands to revert seed here.
    //Example:
    await queryInterface.bulkDelete("Posts", null, {});
  },
};

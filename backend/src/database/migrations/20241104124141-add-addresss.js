'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    queryInterface.addColumn(
      'users',
      'address',
      {
        type: Sequelize.STRING,
      },
    );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'address');
  }
};

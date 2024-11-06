'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    try {

      await queryInterface.addColumn('users', 'username', {
        type: Sequelize.STRING,
      });

    } catch (error) {
      
      console.log(error)  
    
    }

  },
  async down (queryInterface, Sequelize) {
    
    try {

      await queryInterface.removeColumn('username', 'userId');
    
    } catch (error) {
    
      console.log(error)      
    
    }

  }
};

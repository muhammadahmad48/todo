'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    try {

      await queryInterface.addColumn('notes', 'profile', {
        type: Sequelize.STRING,
      });

    } catch (error) {
      
      console.log(error)  
    
    }

  },

  async down (queryInterface, Sequelize) {
    try {

      await queryInterface.removeColumn('notes', 'profile');
    
    } catch (error) {
    
      console.log(error)      
    
    }
  }
};

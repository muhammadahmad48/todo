'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {

      await queryInterface.addColumn('notes', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Name of the user table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

    } catch (error) {
      console.log(error)  
    }

  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('notes', 'userId');
    } catch (error) {
      console.log(error)      
    }
  },
};

'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.addColumn('notes', 'profile', {
                type: Sequelize.STRING,
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    async down(queryInterface, Sequelize) {
        try {
            await queryInterface.removeColumn('notes', 'profile');
        }
        catch (error) {
            console.log(error);
        }
    }
};
//# sourceMappingURL=20241107131807-notes-add-profile.js.map
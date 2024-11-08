'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.addColumn('users', 'username', {
                type: Sequelize.STRING,
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    async down(queryInterface, Sequelize) {
        try {
            await queryInterface.removeColumn('username', 'userId');
        }
        catch (error) {
            console.log(error);
        }
    }
};
//# sourceMappingURL=20241105082331-add-username-in-users.js.map
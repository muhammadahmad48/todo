'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('users', 'address', {
            type: Sequelize.STRING,
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('users', 'address');
    }
};
//# sourceMappingURL=20241104124141-add-addresss.js.map
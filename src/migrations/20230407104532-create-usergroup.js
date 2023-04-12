'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.addColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'role',
      { type: Sequelize.STRING, allowNull: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'role'
    );
  },
};


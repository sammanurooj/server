'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Bio',
      { type: Sequelize.STRING, allowNull: true }
    );
    await queryInterface.addColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Phone',
      { type: Sequelize.STRING, allowNull: true }
    );
    await queryInterface.addColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Location',
      { type: Sequelize.STRING, allowNull: true }
    );

    await queryInterface.addColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'group',
      { type: Sequelize.STRING, allowNull: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Bio'
    );
    await queryInterface.removeColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Phone'
    );
    await queryInterface.removeColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'Location'
    );
    await queryInterface.removeColumn(
      { schema: 'Test_Schema', tableName: 'ApplicationUsers' },
      'group'
    );
  },
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable({
      tableName: 'companyanalysistables',
      schema: process.env.SCHEMA_NAME
    },
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companies: {
        type: Sequelize.STRING
      },
      members: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      completion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companyanalysistables');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable({
      tableName: 'ProjectTables',
      schema: process.env.SCHEMA_NAME
    }, 
    
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      projects: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Action: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('ProjectTables');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable({
      tableName: 'AuthorTables',
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
      Author: {
        type: Sequelize.STRING
      },
      Function: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Employeed: {
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
    return queryInterface.dropTable('AuthorTables');
  }
};
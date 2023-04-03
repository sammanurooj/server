import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class AuthorTable extends Model {
    // static associate() {
    // }
  }

  AuthorTable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      Author: {
        type: STRING,
        allowNull: false,
      },
      Function: {
        type: STRING,
        allowNull: false,
      },

      status: {
        type: STRING,
        allowNull: false,
      },
      Employeed: {
        type: STRING,
        allowNull: false,
      },

      avatar: {
        type: STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'AuthorTable',
      timestamps: true,
    }
  );
  return AuthorTable;
};

import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class companytable extends Model {
    // static associate() {
    // }
  }

  companytable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      comapnies: {
        type: STRING,
        allowNull: true,
      },
      members: {
        type: STRING,
        allowNull: true,
      },
      budget: {
        type: STRING,
        allowNull: true,
      },

      completion: {
        type: STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'companytable',
      timestamps: true,
    }
  );
  return companytable;
};

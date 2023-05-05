import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class marketingcardTable extends Model {
    // static associate() {
    // }
  }

  marketingcardTable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      title: {
        type: STRING,
        allowNull: true,
      },
      count: {
        type: STRING,
        allowNull: true,
      },
      status: {
        type: STRING,
        allowNull: true,
      },

      icon: {
        type: STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'marketingCard',
      timestamps: true,
    }
  );
  return marketingcardTable;
};

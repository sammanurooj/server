import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class UserProjectTable extends Model {
    // static associate() {
    // }
  }

  UserProjectTable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      pic: {
        type: STRING,
        allowNull: false,
      },
      title: {
        type: STRING,
        allowNull: false,
      },

      description: {
        type: STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserProject',

      timestamps: true,
    }
  );
  return UserProjectTable;
};

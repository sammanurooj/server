import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class ApplicationUserTable extends Model {
    // static associate() {
    // }
  }

  ApplicationUserTable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      email: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ApplicationUser',
      timestamps: true,
    }
  );
  return ApplicationUserTable;
};

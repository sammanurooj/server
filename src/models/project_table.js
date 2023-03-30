import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class ProjectTable extends Model {
    // static associate() {
    // }
  }

  ProjectTable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      projects: {
        type: STRING,
        allowNull: false,
      },
      budget: {
        type: STRING,
        allowNull: false,
      },

      status: {
        type: STRING,
        allowNull: false,
      },
      completion: {
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
      modelName: 'ProjectTable',
      timestamps: true,
    }
  );
  return ProjectTable;
};

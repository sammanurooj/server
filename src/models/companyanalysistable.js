import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class companyanalysistable extends Model {
    // static associate() {
    // }
  }

  companyanalysistable.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      companies: {
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
      modelName: 'companyanalysistable',
      timestamps: true,
    }
  );
  return companyanalysistable;
};

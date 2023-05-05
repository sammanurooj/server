import { Model } from 'sequelize';

export default (sequelize, { STRING, INTEGER }) => {
  class Notification extends Model {
    // static associate() {
    // }
  }

  Notification.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      message: {
        type: STRING,
        allowNull: true,
      },
      date: {
        type: STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Notification',
      timestamps: true,
    }
  );
  return Notification;
};

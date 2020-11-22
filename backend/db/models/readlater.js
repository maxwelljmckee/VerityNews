'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadLater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReadLater.belongsTo(models.User, { foreignKey: 'userId' });
      ReadLater.belongsTo(models.Article, { foreignKey: 'articleId' });
    }
  };
  ReadLater.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ReadLater',
  });
  return ReadLater;
};
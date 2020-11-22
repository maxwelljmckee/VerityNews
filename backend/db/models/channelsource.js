'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChannelSource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChannelSource.belongsTo(models.Channel, { foreignKey: 'channelId' });
      ChannelSource.belongsTo(models.Source, { foreignKey: 'sourceId' });
    }
  };
  ChannelSource.init({
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sourceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ChannelSource',
  });
  return ChannelSource;
};
'use strict';
const {
  Model, col
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.belongsTo(models.User, { foreignKey: 'userId' });
      
      const columnMapping = {
        through: 'ChannelSource',
        otherKey: 'sourceId',
        foreignKey: 'channelId'
      }
      Channel.belongsToMany(models.Source, columnMapping);
    }
  };
  Channel.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};
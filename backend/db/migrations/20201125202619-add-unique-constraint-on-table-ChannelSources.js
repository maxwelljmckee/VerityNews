'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ChannelSources', {
      fields: ['channelId', 'sourceId'],
      type: 'unique',
      name: 'ChannelSources_unique_key'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ChannelSources', 'ChannelSources_unique_key')
  }
};
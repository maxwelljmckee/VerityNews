'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Channels', 'Channels_name_key')

    await queryInterface.addConstraint('Channels', {
      fields: ['name', 'userId'],
      type: 'unique',
      name: 'Channels_name_key'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Channels', {
      fields: ['name'],
      type: 'unique', 
      name: 'Channels_name_key'
    })
  }
};

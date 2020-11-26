'use strict';
const db = require('../models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = require('../../misc-resources/seeder-backup/production-sourceList');
    console.log(seedData);

    // console.log(hello);

    await queryInterface.bulkInsert('Sources', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
};

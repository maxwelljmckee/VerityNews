'use strict';
const db = require('../models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = require('../../misc-resources/seeder-backup/production-articleList');

    await queryInterface.bulkInsert('Articles', seedData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
};
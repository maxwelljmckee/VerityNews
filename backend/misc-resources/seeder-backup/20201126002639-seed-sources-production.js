'use strict';
const db = require('../../db/models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = require('../../misc-resources/seeder-backup/production-sourcesList');

    await queryInterface.bulkInsert('Article', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
};

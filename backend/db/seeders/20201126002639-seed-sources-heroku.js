'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sources = await db.Source.findAll();
    // console.log(sources);
    const seedData = sources.map(source => {
      return {
        id: source.id,
        name: source.name,
        encodedName: source.encodedName,
        description: source.description,
        url: source.url,
        category: source.category,
        language: source.language,
        country: source.country,
        imageUrl: source.imageUrl
      }
    });

    // console.log(seedData);

    // console.log(hello);

    await queryInterface('Sources', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

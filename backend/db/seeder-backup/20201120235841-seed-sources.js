'use strict';
require('dotenv').config();
const fetch = require('node-fetch');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const apiKey = process.env.API_KEY;
    const res = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`)
    const { sources } = await res.json()
    const seedData = sources.map(source => {
      return {
        name: source.name,
        encodedName: source.id,
        description: source.description,
        url: source.url,
        category: source.category,
        language: source.language,
        country: source.country,
      }
    })

    await queryInterface.bulkInsert('Sources', seedData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
};

'use strict';
const db = require('../models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sources = await db.Source.findAll();
    // console.log(sources);
    const seedData = sources.map(source => {
      return {
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

    fs.writeFile('./misc-resources/seeder-backup/production-sourceList.js', JSON.stringify(seedData), (err) => {
      if (err) throw err;
      console.log('writefile was successful!');
    })

    // console.log(hello);

    // await queryInterface.bulkInsert('Sources', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
};
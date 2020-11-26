'use strict';
const db = require('../models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // console.log(hello);

    // await queryInterface.bulkInsert('Sources', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sources');
  }
}; 'use strict';
const db = require('../models');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const articles = await db.Article.findAll();
    // console.log(sources);
    const seedData = articles.map(article => {
      return {
        sourceId: article.sourceId || 'Source not available',
        author: article.author || 'Author not available',
        title: article.title || 'Title not available',
        description: article.description || 'Description not available',
        url: article.url || 'URL not available',
        urlToImage: article.urlToImage || 'Image not available',
        publishedAt: article.publishedAt || new Date(),
        content: article.content || 'Content not available'
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
'use strict';
require('dotenv').config();
const fetch = require('node-fetch');
const db = require('../models')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const apiKey = process.env.API_KEY;

    const sources = await db.Source.findAll();

    const articles = [];
    await Promise.all(sources.map(async (source) => {
      const res = await fetch(`https://newsapi.org/v2/everything?sources=${source.encodedName}&apiKey=${apiKey}`);
      const data = await res.json();
      articles.push(...data.articles);
    }))

    const seedData = articles.map(article => {
      return {
        sourceId: article.source.id || 'Source not available',
        author: article.author || 'Author not available',
        title: article.title || 'Title not available',
        description: article.description || 'Description not available',
        url: article.url || 'URL not available',
        urlToImage: article.urlToImage || 'Image not available',
        publishedAt: article.publishedAt || new Date(),
        content: article.content || 'Content not available'
      }
    })

    await queryInterface.bulkInsert('Articles', seedData);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles');
  }
};

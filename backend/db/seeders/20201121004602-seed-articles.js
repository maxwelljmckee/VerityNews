'use strict';
require('dotenv').config();
const fetch = require('node-fetch');
const db = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const apiKey = process.env.API_KEY;

    const sources = await db.Source.findAll();
    const encodedSources = sources.map(source => source.encodedName).join(',');

    const pages = [1, 2, 3, 4, 5]
    const articles = [];
    await Promise.all(pages.map(async(page) => {
      const res = await fetch(`https://newsapi.org/v2/everything?page=${page}&sources=${encodedSources}&apiKey=${apiKey}`);
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

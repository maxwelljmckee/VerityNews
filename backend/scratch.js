require('dotenv').config()
// const fetch = require('node-fetch');
const db = require('./db/models')

// const apiKey = process.env.API_KEY;
// const fetchArticles = async() => {
//   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
//   const { articles } = await res.json();
//   console.log(articles);
//   const seedData = articles.map((article) => {
//     return {
//       sourceId: article.source.name || 1,
//       author: article.author || 'Author not available',
//       title: article.title || 'Title not available',
//       description: article.description || 'Description not available',
//       url: article.url || 'URL not available',
//       urlToImage: article.urlToImage || 'Image not available',
//       publishedAt: article.publishedAt || new Date(),
//       content: article.content || 'Content not available'
//     }
//   })
//   console.log(seedData);
// }

// fetchArticles()

const date = new Date();
const dateOnly = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
console.log(date);
console.log(dateOnly);
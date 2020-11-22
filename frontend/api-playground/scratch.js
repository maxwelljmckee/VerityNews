const apiKey = '04revc2z3hebnsshyixx2b2qh'
const fetch = require('node-fetch');

// 'api.datanews.io/v1/news?q=SpaceX&from=2020-07-01' - H 'x-api-key: 04revc2z3hebnsshyixx2b2qh'


// const fetchSources = async () => {
//   const sources = async() => {
//     const res = await fetch('https://newsapi.org/v2/sources?apiKey=34dc40ad3d8c4c128e21d2b3d9f1aa2f');
//     const json = await res.json();
//     return json.sources
//   }; 
//   const res = await sources();
//   const resCopy = [...res];
//   return resCopy
// }

// const sources = fetchSources();
// console.log(sources);

// const sourcesCopy = sources.slice()

// module.exports = sourcesCopy;
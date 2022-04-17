const axios = require("axios");
const countries = require("./countries.json");
require("dotenv").config();

async function getNews(country) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=sport&apiKey=${process.env.NEWS_SECRET_KEY}&pageSize=3`
    );
    return {
      country: country,
      articles: response.data.articles,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function () {
  const newsPromises = countries.map(getNews);
  return Promise.all(newsPromises).then((newsObjects) => {
    console.log("newsObjects:", newsObjects);
    return [].concat.apply([], newsObjects);
  });
};

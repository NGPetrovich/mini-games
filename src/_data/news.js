const axios = require("axios");
require("dotenv").config();

module.exports = async function () {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=be&apiKey=${process.env.NEWS_SECRET_KEY}&pageSize=7`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const axios = require('axios');
const News = require('../models/News');

const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addNews = async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${process.env.NEWS_API_KEY}`);
    const newsData = response.data.articles;

    const news = await News.insertMany(newsData.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt,
    })));

    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getNews, addNews };

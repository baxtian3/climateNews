const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  source: String,
  publishedAt: Date,
});

module.exports = mongoose.model('News', NewsSchema);

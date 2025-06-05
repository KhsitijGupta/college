const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    trim: true,
  },
  linkTitle: {
    type: String,
    required: false,
    trim: true,
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  date: {
    type: Date,
    required: false,
  },
}, {
  timestamps: true,
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;

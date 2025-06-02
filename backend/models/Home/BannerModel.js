  const mongoose = require('mongoose');

  const singletonImageSchema = new mongoose.Schema({
    image1: {
      type: String,
      required: false,
    },
    image2: {
      type: String,
      required: false,
    },
    image3: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const SingletonImages = mongoose.model('SingletonImages', singletonImageSchema);

  module.exports = SingletonImages;

const mongoose = require('mongoose');

const bannerImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true, // Make sure every banner has a URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const BannerImage = mongoose.model('BannerImage', bannerImageSchema);

module.exports = BannerImage;

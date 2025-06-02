const mongoose = require('mongoose');

const foundationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Foundation', foundationSchema);

const mongoose = require('mongoose');

const aboutContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  students: {
    type: Number,
    required: true,
    min: 0
  },
  collegeAcceptance: {
    type: String,
    required: true,
    trim: true
  },
  yearsOfExcellence: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('AboutContent', aboutContentSchema);

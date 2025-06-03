const mongoose = require('mongoose');

const foundationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type:String,
    trim: true,
  },
  ourFoundationImage: {
    type:String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Foundation', foundationSchema);

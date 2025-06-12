// models/TopbarModel.js

import mongoose from 'mongoose';

const topbarSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
}, {
  timestamps: true // optional, for createdAt & updatedAt
});

const Topbar = mongoose.model('Topbar', topbarSchema);

export default Topbar;

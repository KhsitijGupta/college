      const mongoose = require('mongoose');
    
      const EventImageSchema = new mongoose.Schema({
        image: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      });
    
      const EventImages = mongoose.model('EventImages', EventImageSchema);
    
      module.exports = EventImages;
    
const EventImages = require('../../models/EventGallery/EventGalleryModel.js')


// GET all event images
const getEventImages = async (req, res) => {
  try {
    const images = await EventImages.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event images' });
  }
};

// POST upload a new event image
const uploadEventImage = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }

    const imageEntries = req.files.map(file => ({
      image: file.filename,
    }));

    const savedImages = await EventImages.insertMany(imageEntries);

    res.status(201).json({ message: 'Images uploaded successfully', images: savedImages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image upload failed' });
  }
};


const deleteEventGalleryImage = async (req, res) => {
  const { imageUrl } = req.body;
  try {
    const result = await EventImages.findOneAndDelete({ image: imageUrl });
    // Optionally also remove file from server with fs.unlink
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete image" });
  }
};

module.exports = {
  getEventImages,
  uploadEventImage,
  deleteEventGalleryImage,
};

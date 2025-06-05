const BannerImage = require('../../models/Home/BannerImageModel.js');
const fs = require('fs');
const path = require('path');

// Upload and save banner images (multiple uploads allowed)
module.exports.createOrAddImages = async (req, res) => {
  try {
    const uploadedFiles = req.files; // This is an array
    const savedImages = [];

    for (const file of uploadedFiles) {
      const newImage = new BannerImage({ imageUrl: file.filename });
      await newImage.save();
      savedImages.push(newImage);
    }

    res.status(201).json({ message: 'Images uploaded successfully', data: savedImages });
  } catch (error) {
    console.error('Error saving images:', error);
    res.status(500).json({ error: 'Failed to upload images' });
  }
};


// Get all banner images
module.exports.getBannerImages = async (req, res) => {
  try {
    const images = await BannerImage.find().sort({ createdAt: -1 });

    if (!images.length) {
      return res.status(404).json({ message: 'No banner images found.' });
    }

    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Failed to fetch banner images' });
  }
};

// Delete image by imageUrl (filename)
module.exports.DeleteImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image URL is required" });
    }

    const imageDoc = await BannerImage.findOne({ imageUrl });

    if (!imageDoc) {
      return res.status(404).json({ error: "Image not found in database" });
    }

    // Delete file from uploads folder
    const imagePath = path.join(__dirname, "../../uploads/Home", imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete from DB
    await BannerImage.deleteOne({ _id: imageDoc._id });

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: "Failed to delete image" });
  }
};

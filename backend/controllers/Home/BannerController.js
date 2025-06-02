const SingletonImages = require('../../models/Home/BannerModel.js');
const fs = require('fs');
const path = require('path');

module.exports.createOrAddImages = async (req, res) => {
  try {
    const image1 = req.files['image1']?.[0]?.filename || null;
    const image2 = req.files['image2']?.[0]?.filename || null;
    const image3 = req.files['image3']?.[0]?.filename || null;

    const updatedImage = await SingletonImages.findOneAndUpdate(
      {},
      { image1, image2, image3 },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Images saved successfully', data: updatedImage });
  } catch (error) {
    console.error('Error saving images:', error);
    res.status(500).json({ error: 'Failed to save images' });
  }
};



module.exports.getBannerImages = async (req, res) => {
  try {
    const document = await SingletonImages.findOne();

    if (!document) {
      return res.status(404).json({ message: 'No banner images found.' });
    }

    // Gather images that are not null/undefined
    const images = [document.image1, document.image2, document.image3].filter(Boolean);

    if (images.length === 0) {
      return res.status(404).json({ message: 'No banner images found.' });
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch banner images', error: error.message });
  }
};

app.delete('/api/home/deleteBannerImages', async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image URL is required" });
    }

    const document = await SingletonImages.findOne();

    if (!document) {
      return res.status(404).json({ error: "Banner images not found" });
    }

    let updatedFields = {};

    if (document.image1 === imageUrl) updatedFields.image1 = null;
    else if (document.image2 === imageUrl) updatedFields.image2 = null;
    else if (document.image3 === imageUrl) updatedFields.image3 = null;
    else {
      return res.status(404).json({ error: "Image URL not found" });
    }

    await SingletonImages.updateOne({ _id: document._id }, { $set: updatedFields });

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete image" });
  }
});

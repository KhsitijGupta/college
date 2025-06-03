const Foundation = require('../../models/AboutsModel/FoundationModel.js');

module.exports.createOrUpdateFoundation = async (req, res) => {
  try {
    const data = req.body;

    const foundation = await Foundation.findOneAndUpdate(
      {}, 
      { content :data.content,
        name:data.name,
        ourFoundationImage:'',
      },
      {
        new: true,            
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({ message: 'Content saved successfully!', foundation });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save content', error });
  }
};


module.exports.getFoundation = async (req, res) => {
  try {
    const foundation = await Foundation.findOne().sort({ createdAt: -1 });

    if (!foundation) {
      return res.status(404).json({ message: 'No content found' });
    }

    res.status(200).json({ foundation });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch content', error });
  }
};

module.exports.createOrUpdateimage = async (req, res) => {
  try {
    // const { image } = req.body;
       const image = req.file?.filename|| null;
    if (!image) {
      return res.status(400).json({ error: 'Image is required.' });
    }
    // Find the existing single document or create it if it doesn't exist
    const foundation = await Foundation.findOneAndUpdate(
      {},
      { $set: { ourFoundationImage: image } },
      {
        new: true,
        upsert: true, // create if not found
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({ message: 'Foundation image updated successfully.', foundation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

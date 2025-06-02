const Foundation = require('../../models/AboutsModel/FoundationModel.js');

exports.createOrUpdateFoundation = async (req, res) => {
  try {
    const { content } = req.body;

    const foundation = await Foundation.findOneAndUpdate(
      {}, 
      { content },
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


exports.getFoundation = async (req, res) => {
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

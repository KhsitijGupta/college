const AboutContentModel = require('../../models/AboutsModel/AboutContentModel.js');

module.exports.getAboutContent = async (req, res) => {
  try {
    const content = await AboutContentModel.findOne({});
    
    if (!content) {
      return res.status(404).json({ message: 'About content not found.' });
    }

    res.status(200).json({ data: content });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports.updateAboutContent = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      image:'',
      students: req.body.students,
      collegeAcceptance: req.body.collegeAcceptance,
      yearsOfExcellence: req.body.yearsOfExcellence,
    };


    const updatedContent = await AboutContentModel.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: 'About content updated successfully.', data: updatedContent });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports.createOrUpdateAboutimage = async (req, res) => {
  try {
       const image = req.file?.filename|| null;
    if (!image) {
      return res.status(400).json({ error: 'Image is required.' });
    }
    // Find the existing single document or create it if it doesn't exist
    const data = await AboutContentModel.findOneAndUpdate(
      {},
      { $set: { image: image } },
      {
        new: true,
        upsert: true, // create if not found
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({ message: 'About Content image updated successfully.', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

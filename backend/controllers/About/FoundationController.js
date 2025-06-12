const Foundation = require('../../models/AboutsModel/FoundationModel.js');

// Create new foundation entry
module.exports.createFoundation = async (req, res) => {
  try {
    const { name, content } = req.body;
    const image = req.file?.filename || null;

    const foundation = new Foundation({
      name,
      content,
      ourFoundationImage: image
    });

    await foundation.save();

    res.status(201).json({ message: 'Foundation created successfully', foundation });
  } catch (error) {
    console.error("Error creating foundation:", error);
    res.status(500).json({ message: 'Failed to create foundation', error });
  }
};

// Get all foundation entries
module.exports.getFoundations = async (req, res) => {
  try {
    const foundations = await Foundation.find().sort({ createdAt: 1 });

    res.status(200).json({ foundations });
  } catch (error) {
    console.error("Error fetching foundations:", error);
    res.status(500).json({ message: 'Failed to fetch foundations', error });
  }
};

module.exports.updateFoundationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;
    const image = req.file?.filename || null;

    const updateFields = { name, content };
    if (image) updateFields.ourFoundationImage = image;

    const updatedFoundation = await Foundation.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedFoundation) {
      return res.status(404).json({ message: 'Foundation not found' });
    }

    res.status(200).json({ message: 'Foundation updated', foundation: updatedFoundation });
  } catch (error) {
    console.error("Error updating foundation:", error);
    res.status(500).json({ message: 'Failed to update foundation', error });
  }
};

module.exports.deleteFoundation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Foundation.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Foundation not found' });
    }

    res.status(200).json({ message: 'Foundation deleted successfully' });
  } catch (error) {
    console.error("Error deleting foundation:", error);
    res.status(500).json({ message: 'Failed to delete foundation', error });
  }
};

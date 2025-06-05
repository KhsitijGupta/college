const Program = require("../../models/Home/ServicesModel.js");
// GET: Fetch all programs
module.exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find().sort({ createdAt: -1 });
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

// POST: Create a new program
module.exports.createProgram = async (req, res) => {
  try {
    const { title, duration, highlights, description } = req.body;

    if (!title || !duration) {
      return res.status(400).json({ error: "Title and duration are required." });
    }

    const newProgram = new Program({
      title,
      duration,
      highlights,
      description,
    });

    await newProgram.save();

    res.status(201).json({ message: "Program created successfully", program: newProgram });
  } catch (error) {
    console.error("Error creating program:", error);
    res.status(500).json({ error: "Failed to create program" });
  }
};

// PUT: Update an existing program
module.exports.editProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, duration, highlights, description } = req.body;

    const updated = await Program.findByIdAndUpdate(
      id,
      { title, duration, highlights, description },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Program not found" });
    }

    res.status(200).json({ message: "Program updated successfully", program: updated });
  } catch (error) {
    console.error("Error updating program:", error);
    res.status(500).json({ error: "Failed to update program" });
  }
};

// DELETE: Delete a program
module.exports.deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Program.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Program not found" });
    }

    res.status(200).json({ message: "Program deleted successfully" });
  } catch (error) {
    console.error("Error deleting program:", error);
    res.status(500).json({ error: "Failed to delete program" });
  }
};

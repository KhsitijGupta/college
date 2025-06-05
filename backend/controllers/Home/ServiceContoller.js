import Program from "../../models/Home/ServicesModel.js";

// GET: Fetch all programs
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

// POST: Create a new program
export const createProgram = async (req, res) => {
  try {
    const { title, duration, image, highlights, description } = req.body;

    // Simple validation
    if (!title || !duration) {
      return res.status(400).json({ error: "Title and duration are required." });
    }

    const newProgram = new Program({
      title,
      duration,
      image,
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

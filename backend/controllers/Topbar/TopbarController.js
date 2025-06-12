import Topbar from '../../models/Topbar/TopbarModel.js';

// Upload or update the topbar config (only one document will exist)
export const uploadOrUpdateTopbar = async (req, res) => {
  try {
    const { message, link } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, message: "Message is required." });
    }

    const updatedTopbar = await Topbar.findOneAndUpdate(
      {},
      { message, link: link || "#" },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    res.status(200).json({ success: true, data: updatedTopbar });
  } catch (error) {
    console.error("Topbar upload/update error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get the existing topbar config
export const getTopbar = async (req, res) => {
  try {
    const topbar = await Topbar.findOne();

    if (!topbar) {
      return res.status(404).json({ success: false, message: "Topbar not found." });
    }

    res.status(200).json({ success: true, data: topbar });
  } catch (error) {
    console.error("Topbar fetch error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

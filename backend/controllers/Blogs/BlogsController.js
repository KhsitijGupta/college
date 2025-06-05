const Blog = require("../../models/BlogModel/blogsModel.js");

module.exports.createBlog = async (req, res) => {
  try {
    const { title, description, linkTitle, link, date } = req.body;
    const imagePath = req.file ? req.file.path : ""; // or req.file.filename

    const blog = new Blog({
      title,
      description,
      image: imagePath,
      linkTitle,
      link,
      date: date ? new Date(date) : new Date(),
    });

    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (err) {
    console.error("Create blog error:", err);
    res.status(500).json({ error: "Failed to create blog" });
  }
};

// Get all blog posts
module.exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error while fetching blogs." });
  }
};

// Get a single blog by ID
module.exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Server error while fetching blog." });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, linkTitle, link, date } = req.body;
    const imagePath = req.file ? req.file.path : undefined;

    const updatedData = {
      title,
      description,
      linkTitle,
      link,
      date: date ? new Date(date) : undefined,
    };

    if (imagePath) {
      updatedData.image = imagePath;
    }

    // Remove undefined fields
    Object.keys(updatedData).forEach(
      (key) => updatedData[key] === undefined && delete updatedData[key]
    );

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Server error while updating blog." });
  }
};
// Delete a blog by ID
module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Server error while deleting blog." });
  }
};


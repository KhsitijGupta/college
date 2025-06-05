const express = require('express');
const getImageUploader = require('../controllers/Home/ImageController.js');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogs/BlogsController.js");

const upload = getImageUploader('/Blogs');
const BlogsRouter = express.Router();

BlogsRouter.post("/createBlog", upload.single("image"), createBlog);
BlogsRouter.get("/getAllBlogs", getAllBlogs);
BlogsRouter.get("/getBlogDetail/:id", getBlogById);
BlogsRouter.put("/updateBlog/:id", upload.single("image"), updateBlog);
BlogsRouter.delete("/deleteBlog/:id", deleteBlog);

module.exports = BlogsRouter;

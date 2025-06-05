import React, { useState } from "react";
import axios from "axios";

const AddBlogData = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    linkTitle: "",
    link: "",
    date: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formPayload.append(key, value)
    );
    if (imageFile) formPayload.append("image", imageFile);

    try {
      await axios.post("/api/blogs/createBlog", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Blog added successfully!");
      setFormData({
        title: "",
        description: "",
        linkTitle: "",
        link: "",
        date: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding blog:", error);
      setMessage("Failed to add blog. Check console.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      {message && <p className="mb-4 text-green-600 font-medium">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description (use ** for bullet points)"
          value={formData.description}
          onChange={handleChange}
          required
          rows="6"
          className="w-full p-2 mb-0 border rounded"
        />
        <p className="m-0 mb-5 text-sm text-slate-400">
          Description (use ** for bullet points)
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="linkTitle"
          placeholder="Link Title (e.g., YouTube Video)"
          value={formData.linkTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="link"
          placeholder="Link URL"
          value={formData.link}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogData;

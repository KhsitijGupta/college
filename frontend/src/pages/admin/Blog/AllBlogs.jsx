import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/blogs/getAllBlogs");
      setBlogs(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`/api/blogs/deleteBlog/${id}`);
      // Refetch after delete
      fetchBlogs();
    } catch (err) {
      alert("Failed to delete blog.");
    }
  };

  if (loading) {
    return (
      <>
        <div className="text-center mt-20">Loading blogs...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="text-center mt-20 text-red-500">{error}</div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Manage Blogs</h1>

        <button
          onClick={() => navigate("/blogs/create")}
          className="mb-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Blog
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-5 border-b border-gray-300 text-left">Title</th>
                <th className="py-3 px-5 border-b border-gray-300 text-left">Date</th>
                <th className="py-3 px-5 border-b border-gray-300 text-left">Image</th>
                <th className="py-3 px-5 border-b border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="py-3 px-5 border-b border-gray-300">{blog.title}</td>
                  <td className="py-3 px-5 border-b border-gray-300">
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-5 border-b border-gray-300">
                    {blog.image ? (
                      <img
                        src={`/${blog.image}`}
                        alt={blog.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="py-3 px-5 border-b border-gray-300 space-x-4">
                    <button
                      onClick={() => navigate(`/blogs/edit/${blog._id}`)}
                      className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/blogs/detail/${blog._id}`}
                      className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

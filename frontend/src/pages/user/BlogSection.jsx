import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import axios from "axios";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs/getAllBlogs"); // adjust API path as needed
        setBlogs(res.data);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20">Loading blogs...</div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20 text-red-500">{error}</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <br />
      <section className="py-16 mt-10 bg-gradient-to-r from-slate-100 to-white ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Latest Blog Posts
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <div
                key={blog._id || index}
                className="bg-white shadow-xl rounded-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <Link to={`/blogs/detail/${blog._id}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    {(() => {
                      // Remove markdown-like ** bullets or other formatting
                      const plainText = blog.description.replace(/\*\*/g, "");
                      const words = plainText.split(/\s+/);
                      const previewText = words.slice(0, 30).join(" ");
                      return (
                        <>
                          <p className="text-gray-700 text-lg mb-4">
                            {previewText}...
                          </p>
                          <Link
                            to={`/blogs/detail/${blog._id}`}
                            className="inline-block mt-2 text-blue-600 hover:underline font-semibold"
                          >
                            Read Full Blog →
                          </Link>
                        </>
                      );
                    })()}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

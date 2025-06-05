import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetail() {
  const { id } = useParams(); // get blog id from route params
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await axios.get(`/api/blogs/getBlogDetail/${id}`); // adjust endpoint as per your backend
        setBlog(res.data);
        setError(null);
      } catch (err) {
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="container mx-auto mt-20 text-center text-gray-600">
          Loading blog...
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="container mx-auto mt-20 text-center text-red-600">
          {error}
        </div>
      </>
    );
  }

  if (!blog) {
    return null; // or some fallback UI
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-4xl mt-20 mx-auto py-10 px-6 bg-slate-50 rounded-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-600 mb-6 font-bold">{new Date(blog.date).toLocaleDateString()}</p>
          {blog.image && (
            <img
              src={`/${blog.image}`}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-xl mb-8 border border-black"
            />
          )}
          {blog.description.split('\n').map((line, i) => {
            if (line.trim().startsWith("**")) {
              return (
                <ul key={i} className="list-disc list-inside text-gray-700 text-lg mb-2">
                  <li>{line.replace("**", "").trim()}</li>
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-700 text-lg mb-4">
                {line.trim()}
              </p>
            );
          })}
          {blog.link && (
            <Link
              to={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold text-xl"
            >
              {blog.linkTitle || "External Link"} →
            </Link>
          )}
        </div>
      </div>

    </>
  );
}

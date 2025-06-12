import React, { useState, useEffect } from "react";
import axios from "axios";

const AddTopbarContent = () => {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔽 Get existing data when component mounts
  useEffect(() => {
    const fetchTopbarData = async () => {
      try {
        const res = await axios.get("/api/topbar/getTopbarData");
        const { message, link } = res.data.data;
        setMessage(message || "");
        setLink(link || "");
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch topbar data:", err);
        setLoading(false);
      }
    };

    fetchTopbarData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/topbar/addTopbarData", {
        message,
        link,
      });
      setSuccess("Topbar content updated successfully!");
    } catch (err) {
      console.error("Error:", err);
      setSuccess("Something went wrong.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Topbar Content</h2>

      {success && <p className="mb-4 text-green-600">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows="3"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter topbar message"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Link</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save / Update Content
        </button>
      </form>
    </div>
  );
};

export default AddTopbarContent;

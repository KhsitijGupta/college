import { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    description: "",
    highlights: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      // Prepare highlights as an array
      const finalData = {
        ...formData,
        highlights: formData.highlights
          .split(",")
          .map((h) => h.trim())
          .filter((h) => h.length > 0),
      };

      await axios.post("/api/home/uploadPrograms", finalData);

      setSuccessMsg("Program added successfully!");
      setFormData({
        title: "",
        duration: "",
        description: "",
        highlights: "",
      });
      console.log(finalData);
      alert("Service added successfully")
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again.");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Add New Academic Program
      </h2>

      {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Program Title"
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Program Duration"
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Program Description"
          rows="4"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <div>
          <label className="font-semibold block mb-1">Highlights (comma separated)</label>
          <input
            name="highlights"
            value={formData.highlights}
            onChange={handleChange}
            placeholder="e.g., Industry-focused curriculum, Experienced faculty, Flexible schedule"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Enter multiple highlights separated by commas.
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Program
        </button>
      </form>
    </div>
  );
};

export default AddServices;

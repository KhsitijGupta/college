import { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    description: "",
    highlights: [""],
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const addHighlightField = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post("/api/programs", formData);
      setSuccessMsg("Program added successfully!");
      setFormData({
        title: "",
        duration: "",
        description: "",
        highlights: [""],
      });
    } catch (error) {
      console.error(error);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Add New Academic Program</h2>

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
          <label className="font-semibold block mb-2">Highlights</label>
          {formData.highlights.map((highlight, idx) => (
            <input
              key={idx}
              type="text"
              value={highlight}
              onChange={(e) => handleHighlightChange(idx, e.target.value)}
              placeholder={`Highlight ${idx + 1}`}
              className="w-full border px-4 py-2 rounded-lg mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addHighlightField}
            className="text-blue-600 hover:underline text-sm"
          >
            + Add Another Highlight
          </button>
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

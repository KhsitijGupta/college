import React, { useState } from "react";

const iconOptions = [
  "Scale",
  "Users",
  "Building",
  "Wifi",
  "Monitor",
  "Trophy",
];

const colorOptions = [
  "from-blue-400 to-blue-500",
  "from-green-400 to-green-500",
  "from-purple-400 to-purple-500",
  "from-indigo-400 to-indigo-500",
  "from-pink-400 to-pink-500",
  "from-orange-400 to-orange-500",
];

const AddFacilities = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [iconName, setIconName] = useState(iconOptions[0]);
  const [color, setColor] = useState(colorOptions[0]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Basic validation
    if (!title.trim()) {
      setMessage("Title is required.");
      setLoading(false);
      return;
    }

    // Construct data object
    const facilityData = { title, iconName, color };

    try {
      // Replace with your API endpoint
      const response = await fetch("/api/facilities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(facilityData),
      });

      if (!response.ok) {
        throw new Error("Failed to insert facility");
      }

      setMessage("Facility added successfully!");
      setTitle("");
      setIconName(iconOptions[0]);
      setColor(colorOptions[0]);

      if (onSubmit) onSubmit(); // To refresh list if needed
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Facility</h2>

      <label className="block mb-2 font-medium text-gray-700">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter facility title"
        required
      />

      <label className="block mb-2 font-medium text-gray-700">Icon</label>
      <select
        value={iconName}
        onChange={(e) => setIconName(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {iconOptions.map((icon) => (
          <option key={icon} value={icon}>
            {icon}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium text-gray-700">Gradient Color</label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {colorOptions.map((colorOption) => (
          <option key={colorOption} value={colorOption}>
            <span className={`${colorOption} border-b-1 border-black w-10`}></span>
            {colorOption}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? "Adding..." : "Add Facility"}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
      )}
    </form>
  );
};

export default AddFacilities;

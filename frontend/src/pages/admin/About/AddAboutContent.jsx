import React, { useState,useEffect } from "react";
import axios from "axios";
import ImageUploader from "../../../../components/admin/ImageUploader";

const AddAboutContent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    students: "",
    collegeAcceptance: "",
    yearsOfExcellence: "",
  });
 // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/about/getAboutContent");
        console.log()
        if (res.data?.data) {
          setFormData(res.data?.data);
        }
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    const handleUploadSuccess = (data) => {
    console.log("Upload response:", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/about/uploadAboutContent", formData);
      alert("Content added successfully!");
      setFormData({
        title: "",
        description: "",
        image: "",
        students: "",
        collegeAcceptance: "",
        yearsOfExcellence: "",
      });
    } catch (error) {
      console.error("Error adding content:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-full mx-auto  bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add About Content</h2>
        <div className="flex gap-6">
          <ImageUploader
          title="Upload About Content Images"
          maxImages={1}
          uploadUrl="/api/about/uploadAboutContentImages"
          onUploadSuccess={handleUploadSuccess}
          inputName="image"
          />
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write description..."
              required
            ></textarea>
          </div>
          <div className="flex gap-3">

          <div>
            <label className="block font-medium mb-1 text-gray-700">Number of Students</label>
            <input
              type="number"
              name="students"
              value={formData.students}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 1500"
              required
              min="0"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">College Acceptance</label>
            <input
              type="text"
              name="collegeAcceptance"
              value={formData.collegeAcceptance}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 95% Acceptance Rate"
              required
              />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Years of Excellence</label>
            <input
              type="number"
              name="yearsOfExcellence"
              value={formData.yearsOfExcellence}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 20"
              required
              min="0"
            />
          </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAboutContent;

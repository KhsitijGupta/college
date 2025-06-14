import React, { useEffect, useState } from "react";
import axios from "axios";

function AllBannerImages() {
  const [images, setImages] = useState([]); // array of { _id, imageUrl, createdAt }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/home/bannerImages");
        setImages(response.data); // Array of banner image documents
      } catch (err) {
        setError(err.message || "Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (imageUrl, id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    try {
      await axios.delete("/api/home/deleteBannerImages", {
        data: { imageUrl },
      });

      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch (err) {
      alert("Failed to delete image: " + (err.message || "Unknown error"));
    }
  };

  if (loading)
    return <p className="text-center text-gray-500 mt-4">Loading images...</p>;

  if (error)
    return <p className="text-center text-red-500 mt-4">Error: {error}</p>;

  if (images.length === 0)
    return <p className="text-center text-gray-600 mt-4">No banner images found.</p>;

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {images.map((image) => (
        <div key={image._id} className="relative group">
          <img
            src={`/uploads/Home/${image.imageUrl}`}
            alt="Banner"
            className="w-48 h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={() => handleDelete(image.imageUrl, image._id)}
            className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllBannerImages;

import React, { useEffect, useState } from "react";
import axios from "axios";

function AllEventGalleryImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/event/getEventImages");
        setImages(response.data); // Now expects array of objects: { image, createdAt }
      } catch (err) {
        setError(err.message || "Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (imageFilename, index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    try {
      await axios.delete("/api/event/deleteEventGalleryImage", {
        data: { imageUrl: imageFilename },
      });

      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    } catch (err) {
      alert("Failed to delete image: " + (err.message || "Unknown error"));
    }
  };

  if (loading)
    return <p className="text-center text-gray-500 mt-4">Loading event gallery images...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-4">Error: {error}</p>;
  if (images.length === 0)
    return <p className="text-center text-gray-600 mt-4">No event gallery images found.</p>;

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {images.map((imgObj, index) => (
        <div key={index} className="relative group">
          <img
            src={`/uploads/Event/${imgObj.image}`}
            alt={`Event ${index + 1}`}
            className="w-48 h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={() => handleDelete(imgObj.image, index)}
            className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
}

export default AllEventGalleryImages;

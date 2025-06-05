// File: components/admin/AllServices.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    duration: "",
    description: "",
    highlights: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/home/getAllPrograms");
      setServices(res.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    try {
      await axios.delete(`/api/home/deletePrograms/${id}`);
      setMessage("Program deleted successfully");
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleEdit = (service) => {
    setEditId(service._id);
    setEditData({
      ...service,
      highlights: service.highlights.join(", "),
    });
  };

  const handleUpdate = async () => {
    try {
      const updated = {
        ...editData,
        highlights: editData.highlights
          .split(",")
          .map((h) => h.trim())
          .filter((h) => h.length > 0),
      };

      await axios.put(`/api/home/editProgram/${editId}`, updated);
      setEditId(null);
      setMessage("Program updated successfully");
      fetchServices();
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <h3 className="text-xl font-semibold mb-4">All Academic Programs</h3>
      {message && <div className="text-green-600 mb-2">{message}</div>}

      <table className="min-w-full bg-white border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">S.No</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Duration</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Highlights</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                Loading...
              </td>
            </tr>
          ) : services.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No programs found.
              </td>
            </tr>
          ) : (
            services.map((service, index) => (
              <tr key={service._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>

                <td className="px-4 py-2 border">
                  {editId === service._id ? (
                    <input
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    service.title
                  )}
                </td>

                <td className="px-4 py-2 border">
                  {editId === service._id ? (
                    <input
                      value={editData.duration}
                      onChange={(e) =>
                        setEditData({ ...editData, duration: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    service.duration
                  )}
                </td>

                <td className="px-4 py-2 border">
                  {editId === service._id ? (
                    <textarea
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({ ...editData, description: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                      rows="5"
                    />
                  ) : (
                    service.description
                  )}
                </td>

                <td className="px-4 py-2 border">
                  {editId === service._id ? (
                    <textarea
                      value={editData.highlights}
                      onChange={(e) =>
                        setEditData({ ...editData, highlights: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                      rows="5"
                    />
                  ) : (
                    <ul className="list-disc pl-4">
                      {service.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </td>

                <td className="px-4 py-2 border">
                  {editId === service._id ? (
                    <>
                      <button
                        onClick={handleUpdate}
                        className="text-green-600 font-medium mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="text-gray-600"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(service)}
                        className="text-blue-600 font-medium mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="text-red-600 font-medium"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllServices;
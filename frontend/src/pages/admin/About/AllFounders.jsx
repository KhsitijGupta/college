import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddFoundation from "./AddFoundation"


const AllFounders = ({ activeView }) => {
  const [foundations, setFoundations] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', content: '' });

  useEffect(() => {
    fetchFoundations();
  }, []);

  const fetchFoundations = async () => {
    try {
      const response = await axios.get('/api/about/getfoundation');
      setFoundations(response.data.foundations);
    } catch (error) {
      console.error('Error fetching foundations:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;
    try {
      await axios.delete(`/api/about/deletefoundation/${id}`);
      setFoundations(foundations.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting foundation:', error);
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditForm({ name: item.name, content: item.content });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/api/about/updatefoundation/${id}`, editForm);
      fetchFoundations();
      setEditId(null);
    } catch (error) {
      console.error('Error updating foundation:', error);
    }
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className='flex justify-between items-center'>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Foundation Members</h1>
      <button
        className='bg-blue-600 p-2 rounded-lg text-white font-bold hover:bg-blue-500'
        onClick={()=>{activeView === "Add Founders" && <AddFoundation/>}}
      >
        Add Founders
      </button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 border">#</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 border">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 border">Content</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 border">Image</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700 border">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {foundations.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border text-gray-700">{index + 1}</td>
                <td className="py-3 px-4 border text-gray-800">
                  {editId === item._id ? (
                    <input
                      name="name"
                      value={editForm.name}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1 text-sm"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="py-3 px-4 border text-gray-700 max-w-sm whitespace-pre-wrap break-words">
                  {editId === item._id ? (
                    <textarea
                      name="content"
                      value={editForm.content}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1 text-sm"
                      rows={14}
                    />
                  ) : (
                    item.content
                  )}
                </td>
                <td className="py-3 px-4 border">
                  {item.ourFoundationImage ? (
                    <img
                      src={`/uploads/About/${item.ourFoundationImage}`}
                      alt="Foundation"
                      className="h-16 w-16 object-cover rounded-md border"
                    />
                  ) : (
                    <span className="text-gray-400 italic text-sm">No image</span>
                  )}
                </td>
                <td className="py-3 px-4 border text-center space-x-2">
                  {editId === item._id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {foundations.length === 0 && (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">
                  No foundation members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFounders;

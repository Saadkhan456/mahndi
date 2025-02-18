import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pending requests
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axios.get(
          "https://saadprojectbk.vercel.app/admin/pending-requests"
        );
        if (response.data.success) {
          setRequests(response.data.requests);
        } else {
          setError("Failed to fetch requests.");
        }
      } catch (err) {
        setError("Error fetching requests.");
        console.error("Error fetching requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingRequests();
  }, []);

  // Accept request
  const handleAccept = async (id) => {
    if (!window.confirm("Are you sure you want to accept this request?"))
      return;

    try {
      const response = await axios.put(
        `http://localhost:5000/admin/accept-request/${id}`
      );
      if (response.data.success) {
        setRequests(requests.filter((request) => request._id !== id));
      } else {
        alert("Failed to accept request.");
      }
    } catch (error) {
      alert("Error accepting request.");
      console.error("Error accepting request:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Pending Requests</h2>

      {loading ? (
        <p>Loading requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : requests.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Product</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="border p-2">{request.productName}</td>
                <td className="border p-2">{request.email}</td>
                <td className="border p-2">{request.phone}</td>
                <td className="border p-2">{request.quantity}</td>
                <td className="border p-2">${request.price}</td>
                <td className="border p-2">{request.address}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleAccept(request._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Accept This Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No pending requests found.</p>
      )}
    </div>
  );
};

export default PendingRequests;

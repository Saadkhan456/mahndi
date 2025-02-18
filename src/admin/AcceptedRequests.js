import React, { useEffect, useState } from "react";
import axios from "axios";

const AcceptedRequests = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch accepted requests
  useEffect(() => {
    const fetchAcceptedRequests = async () => {
      try {
        const response = await axios.get(
          "https://saadprojectbk.vercel.app/admin/accepted-requests"
        );
        if (response.data.success) {
          setAcceptedRequests(response.data.requests);
        } else {
          setError("Failed to fetch accepted requests.");
        }
      } catch (err) {
        setError("Error fetching accepted requests.");
        console.error("Error fetching accepted requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAcceptedRequests();
  }, []);

  // Mark as delivered
  const handleDelivered = async (id) => {
    if (!window.confirm("Are you sure this request is delivered?")) return;

    try {
      const response = await axios.put(
        `http://localhost:5000/admin/deliver-request/${id}`
      );
      if (response.data.success) {
        setAcceptedRequests(
          acceptedRequests.filter((request) => request._id !== id)
        );
      } else {
        alert("Failed to mark as delivered.");
      }
    } catch (error) {
      alert("Error marking request as delivered.");
      console.error("Error marking request as delivered:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Accepted Requests</h2>

      {loading ? (
        <p>Loading requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : acceptedRequests.length > 0 ? (
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
            {acceptedRequests.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="border p-2">{request.productName}</td>
                <td className="border p-2">{request.email}</td>
                <td className="border p-2">{request.phone}</td>
                <td className="border p-2">{request.quantity}</td>
                <td className="border p-2">${request.price}</td>
                <td className="border p-2">{request.address}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelivered(request._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No accepted requests found.</p>
      )}
    </div>
  );
};

export default AcceptedRequests;

import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import RegisteredUsers from "./RegisteredUsers";
import PendingRequests from "./PendingRequests";
import AcceptedRequests from "./AcceptedRequests";
import FinishedRequests from "./FinishedRequests";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect unauthorized users to the home page
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear login state
    navigate("/"); // Redirect to home
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <Routes>
          <Route path="registered-users" element={<RegisteredUsers />} />
          <Route path="pending-requests" element={<PendingRequests />} />
          <Route path="accepted-requests" element={<AcceptedRequests />} />
          <Route path="finished-requests" element={<FinishedRequests />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
￼Enter

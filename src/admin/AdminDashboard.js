import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import RegisteredUsers from "./RegisteredUsers";
import PendingRequests from "./PendingRequests";
import AcceptedRequests from "./AcceptedRequests";
import FinishedRequests from "./FinishedRequests";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear login state
    navigate("/"); // Redirect to home
  };

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          Access Denied! Please log in as an admin.
        </h1>
      </div>
    );
  }

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

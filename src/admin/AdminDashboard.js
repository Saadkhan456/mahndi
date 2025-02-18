import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import RegisteredUsers from "./RegisteredUsers";
import PendingRequests from "./PendingRequests";
import AcceptedRequests from "./AcceptedRequests";
import FinishedRequests from "./FinishedRequests";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
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

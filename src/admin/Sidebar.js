import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link to="/admin/registered-users" className="hover:text-gray-400">
            Registered Users
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/pending-requests" className="hover:text-gray-400">
            Pending Requests
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/accepted-requests" className="hover:text-gray-400">
            Accepted Requests
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/finished-requests" className="hover:text-gray-400">
            Finished Requests
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

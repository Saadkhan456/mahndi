import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Close icon

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 z-50 p-5`}
      >
        {/* Close Button (Mobile Only) */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Sidebar Header */}
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        {/* Navigation Links */}
        <ul className="space-y-3">
          <li>
            <Link
              to="/admin/registered-users"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Registered Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/pending-requests"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Pending Requests
            </Link>
          </li>
          <li>
            <Link
              to="/admin/accepted-requests"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Accepted Requests
            </Link>
          </li>
          <li>
            <Link
              to="/admin/finished-requests"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Finished Requests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

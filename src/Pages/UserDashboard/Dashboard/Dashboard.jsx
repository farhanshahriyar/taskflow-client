import React, { useContext } from "react";
import {
  FaCalendar,
  FaSearch
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { CiLogout } from "react-icons/ci";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(logout)
  console.log(user);

  // Logout confirmation and functionalities here
  const handleLogoutConfirmation = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire(
          "Logged Out!",
          "You have been logged out successfully.",
          "success"
        );
      })
      .catch((error) => {
        console.error("Logout error:", error);
        Swal.fire(
          "Oops!",
          "Something went wrong with the logout process.",
          "error"
        );
      });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-between flex-grow">
          <nav className="flex-1 px-4 py-4 space-y-4">
            {/* Dashboard item */}
            <a
              aria-disabled
              href="#dashboard"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>Taskflow Dashboard</span>
            </a>
            <a
              aria-disabled
              href="#dashboard"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>🏠</span>
              <span>Dashboard Home</span>
            </a>
            <a
              href="/dashboard/projects"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>
                <GoProjectSymlink />
              </span>
              <span>Projects</span>
            </a>
            <a
              href="/dashboard/tasks"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>
                <LuListTodo />
              </span>
              <span>Tasks</span>
            </a>
            <a
              href="/dashboard/messages"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>💬</span>
              <span>Messages</span>
            </a>
            <a
              href="/dashboard/messages"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>💬</span>
              <span>Messages</span>
            </a>
            {/* Other nav items */}
          </nav>
          <div className="px-4 py-4">
            {/* Logout */}
            <a
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              <CiLogout className="text-xl" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b bg-white">
          {/* Search bar */}
          <div className="flex space-x-4">
            <FaSearch className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-gray-700 border-none focus:ring-0"
            />
          </div>
          <div className="flex space-x-4">
            <FaCalendar className="w-5 h-5 text-gray-500" />
            <span>Today is</span>
            <p className="border-l border-gray-300 pl-4">
              Time will show here here
            </p>
          </div>
          {/* Profile dropdown */}
          <div className="flex items-center space-x-2">
            {/* <FaUserCircle className="w-8 h-8 text-gray-500" /> */}
            <img
              alt="User"
              src={user?.photoURL}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-medium text-gray-900">
              {user?.displayName}
            </span>
            {/* Profile dropdown items */}
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

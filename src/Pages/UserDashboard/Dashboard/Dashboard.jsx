import React, { useContext } from "react";
import { FaBriefcase, FaCalendar, FaClock, FaSearch } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { CiLogout } from "react-icons/ci";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const loading = false;
  // console.log(logout)
  // console.log(user);

  // loading spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Logged out!",
            text: "You have been logged out.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        });
      }
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
              href="/"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>Taskflow</span>
            </a>
            {/* <a
              aria-disabled
              href="/dashboard"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
             
              <span>🏠</span>
              <span>Dashboard Home</span>
            </a> */}
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
              href="/dashboard/jobs"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span><FaBriefcase/></span>
              <span>Jobs</span>
            </a>
            <a
              href="/dashboard/message"
              className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900"
            >
              {/* Icon */}
              <span>💬</span>
              <span>Messages</span>
            </a>

            {/* Other nav items */}
          </nav>
          <div className="px-4 py-4">
            <a href="/dashboard/software-update-news" className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-700 cursor-pointer">
              {/* Icon */}
              <span>📰</span>
              <span>Update News</span>
            </a>
            <a href="/user-profile" className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-700 cursor-pointer">
              {/* Icon */}
              <span>👤</span>
              <span>Profile Settings</span>
            </a>

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
            {/* date will show here */}
            <span>Day : {new Date().toLocaleDateString()}</span>
          </div>
          <div className="border-l border-gray-300 h-6"></div>
          <div className="flex space-x-4">
          <FaClock className="w-5 h-5 text-gray-500" /> 
            {/* date will show here */}
            <span> Time :{" "}
              {new Date().toLocaleTimeString()} - Bangladeshi Time</span>
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

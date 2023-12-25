import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import StartedCard from "../../../Components/StartedCard/StartedCard";
import { AuthContext } from "../../../providers/AuthProvider";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect (() => {
    fetch(`http://localhost:5000/tasks?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, [user?.email]);

  // Filter tasks by useremail
  const startedTasks = tasks.filter((task) => task.useremail === user?.email);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
        <h1 className="text-xl">Project Management</h1>
        <div className="flex space-x-4">
          <a
            className="group relative inline-block overflow-hidden bg-white border border-green-600 px-8 py-3 focus:outline-none focus:ring cursor-pointer"
            href="/dashboard/tasks"
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-green-600 transition-all group-hover:w-full group-active:bg-green-500"></span>
            <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
              + Create New Task
            </span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100 overflow-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* Started Column */}
          <div>
            <h2 className="text-lg font-bold mb-4">Started</h2>
            {/* Map through started tasks and render them */}
            {startedTasks.map((task) => (
              <StartedCard key={task._id} {...task} />
            ))}
          </div>

          {/* InProgress Column */}
          <div>
            <h2 className="text-lg font-bold mb-4">InProgress</h2>
            {/* Map through inProgress tasks and render them */}
          </div>

          {/* Completed Column */}
          <div>
            <h2 className="text-lg font-bold mb-4">Completed</h2>
            {/* Map through completed tasks and render them */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

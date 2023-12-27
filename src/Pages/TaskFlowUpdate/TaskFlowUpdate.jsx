import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const TaskFlowUpdate = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Taskflow Software Update Logs
            </h2>
            <button
                type="button"
                className="flex items-center gap-x-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
                <span>All Updates</span>
                <span>
                    <svg
                        className="w-3 h-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M5.636 8.464a2 2 0 010-2.828l4.95-4.95a2 2 0 012.828 0l4.95 4.95a2 2 0 010 2.828l-4.95 4.95a2 2 0 01-2.828 0l-4.95-4.95z"
                        />
                    </svg>
                </span>
            </button>
        </div>

        <div className="flex gap-x-3">
          <div className="w-16 text-end">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              12:05PM  25/12/2023
            </span>
          </div>

          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg
                className="flex-shrink-0 w-4 h-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
                Taskflow v1 released 🎉
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Features include: <br/>
                - Add Task <br/>
                - Update Task <br/>
                - Delete Task <br/>
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <img
                className="flex-shrink-0 w-4 h-4 rounded-full"
                src={user?.photoURL}
                alt="Admin"
              />
                 {user?.displayName}  (Taskflow Developer)
            </button>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="w-16 text-end">
            <span className="text-xs text-gray-500 dark:text-gray-400">
                7:00PM  27/12/2023
            </span>
          </div>

          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v1 quick bug fix 🐞 
            </h3>
            {/* <a
              href="#"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                -
              </span>
                <span> Now you can drag and drop your task easily in Taskflow v1 </span>
            </a> */}
          </div>
        </div>

        {/* <div className="flex gap-x-3">
          <div className="w-16 text-end">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              12:05PM
            </span>
          </div>

          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Marked "Install Charts" completed
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <img
                className="flex-shrink-0 w-4 h-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
        </div> */}

        {/* <div className="flex gap-x-3">
          <div className="w-16 text-end">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              12:05PM
            </span>
          </div>

          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TaskFlowUpdate;

import React from "react";

const StartedCard = ({ _id, taskpriority, titletask, taskdescription, date, setRefetech }) => {
  // Function to get the color based on the task priority
  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-500",
      moderate: "bg-orange-500",
      low: "bg-teal-600",
    };
    return colors[priority.toLowerCase()] || "bg-gray-500"; // Default color if none is matched
  };

  const handleStartTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}/start`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'inProgress' }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setRefetech(prev => !prev);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="mt-5">
      <article className="rounded-xl bg-white p-4 ring ring-green-50 sm:p-6 lg:p-8 shadow-2xl">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-green-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-green-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-green-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-green-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-green-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-green-500"></span>
            </div>
          </div>

          <div>
            <strong
              className={`rounded border px-3 py-1.5 text-[10px] font-medium text-white ${getPriorityColor(
                taskpriority
              )}`}
            >
              Task Priority : {taskpriority}
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <a href="" className="hover:underline">
                {" "}
                {titletask}{" "}
              </a>
            </h3>

            <p className="mt-1 text-sm text-gray-700">{taskdescription}</p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <p className="text-xs font-medium"> {date} </p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                Task Datelines{" "}
              </p>
            </div>
              <div className="flex justify-end mt-2">
                <button onClick={() => handleStartTask(_id)}
                 className="group relative inline-block overflow-hidden bg-red-500 hover:bg-orange-600 border px-8 py-3 focus:outline-none focus:ring cursor-pointer">
                  <span className="text-xs font-medium text-white">Start Task</span>
                </button>
              </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StartedCard;

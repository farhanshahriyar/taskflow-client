import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const StartedCard = ({
  _id,
  taskpriority,
  titletask,
  taskdescription,
  date,
  setRefetech,
}) => {
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "inProgress" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRefetech((prev) => !prev);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your task has been deleted.", "success");
            // Remove the task from the state to update the UI
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task._id !== id)
            );
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
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
            <div className="flex justify-between gap-5">
              <div>
                <p className="text-xs font-medium text-gray-600">
                  Task Priority
                </p>
                <strong
                  className={`rounded border px-3 py-1.5 text-[10px] font-medium text-white ${getPriorityColor(
                    taskpriority
                  )}`}
                >
                  {taskpriority}
                </strong>
              </div>
              <div>
                <span class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                  <Link to={`/dashboard/update-task/${_id}`}
                    class="inline-block border-e p-3 text-gray-700 hover:text-white hover:bg-green-500 focus:relative"
                    title="Edit Task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button
                    onClick={() => handleDeleteTask(_id)}
                    class="inline-block p-3 text-gray-700 hover:bg-red-700 hover:text-white focus:relative"
                    title="Delete Task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>

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

                <p className="text-xs font-bold text-red-700"> {date} </p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                Task Datelines{" "}
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => handleStartTask(_id)}
                className="group relative inline-block overflow-hidden bg-red-500 hover:bg-orange-600 border px-8 py-3 focus:outline-none focus:ring cursor-pointer"
              >
                <span className="text-xs font-medium text-white">
                  Start Task
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StartedCard;

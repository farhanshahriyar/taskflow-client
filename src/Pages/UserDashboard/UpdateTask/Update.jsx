import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import ReactDatePicker from "react-datepicker";

const Update = () => {
  const updateTask = useLoaderData();
  const { id } = useParams(); // Get task ID from URL params
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [postingDate, setPostingDate] = useState(new Date());

  // Assuming you have a dueDate similar to postingDate in your tasks
  const initialDate = updateTask.dueDate
    ? new Date(updateTask.dueDate)
    : new Date();
  const [dueDate, setDueDate] = useState(initialDate);

  // Function to call when the form is submitted
  const handleUpdateTask = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const updatedTask = {
      positiontitle: formData.get("positiontitle"),
      recemail: formData.get("recemail"),
      cname: formData.get("cname"),
      cabout: formData.get("cabout"),
      salary: formData.get("salary"),
      imageUrl: formData.get("imageUrl"),
      streetaddress: formData.get("streetaddress"),
      region: formData.get("region"),
      postalcode: formData.get("postalcode"),
      titletask: formData.get("titletask"),
      taskpriority: formData.get("taskpriority"),
      taskdescription: formData.get("taskdescription"),
      dueDate: dueDate.toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const result = await response.json();

      if (result.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Task updated successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/dashboard/projects"); // Navigate back to the projects on dashboard
      } else {
        Swal.fire({
          title: "Error!",
          text: "No changes were made or something went wrong.",
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    } catch (error) {
      console.error("Failed to update task", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating the task.",
        icon: "error",
        confirmButtonText: "Back",
      });
    }
  };

  return (
    <div>
      <h1>Update Task id {id}</h1>
      <form onSubmit={handleUpdateTask}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Update Task
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed All Job page. Not in Dashboard.
              If you dont want to display your company name, you can leave it
              blank. Its optional. If you want to display your company name, you
              can fill it.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Useremail
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      Logged in as
                    </span>
                    <input
                      readOnly
                      disabled
                      type="text"
                      name="useremail"
                      id="useremail"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={user?.email || ""} // if user is not logged in, then email is empty string
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="positiontitle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Position Title
                </label>
                <div className="mt-2">
                  <input
                    id="positiontitle"
                    defaultValue={updateTask.positiontitle}
                    name="positiontitle"
                    type="positiontitle"
                    autoComplete="positiontitle"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Recruter Email address
                </label>
                <div className="mt-2">
                  <input
                    id="recemail"
                    defaultValue={updateTask.recemail}
                    name="recemail"
                    type="recemail"
                    autoComplete="recemail"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="cname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    id="cname"
                    defaultValue={updateTask.cname}
                    name="cname"
                    type="cname"
                    autoComplete="cname"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cabout"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="cabout"
                    name="cabout"
                    defaultValue={updateTask.cabout}
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about company description.
                </p>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Salary Range
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="salary"
                    defaultValue={updateTask.salary}
                    id="salary"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Uploaded Image
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="imageUrl"
                    defaultValue={updateTask.imageUrl}
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetaddress"
                    defaultValue={updateTask.streetaddress}
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City with State
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    defaultValue={updateTask.region}
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalcode"
                    defaultValue={updateTask.postalcode}
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Task Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed on the dashboard. So be careful
              what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title-task"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title of the Task
                </label>
                <div className="mt-2">
                  <input
                    id="title-task"
                    name="titletask"
                    defaultValue={updateTask.titletask}
                    type="title-task"
                    autoComplete="title-task"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="taskpriority"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Task Priority
                </label>
                <div className="mt-2">
                  <select
                    id="task-priority"
                    defaultValue={updateTask.taskpriority}
                    name="taskpriority"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="task-description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Task Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="task-description"
                    name="taskdescription"
                    defaultValue={updateTask.taskdescription}
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about task description.
                </p>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Task Deadline
                </label>
                <ReactDatePicker
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}
                  name="dueDate" 
                  className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Update task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;

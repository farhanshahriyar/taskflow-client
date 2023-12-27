import React, { useState, useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const UpdateTask = () => {
  const taskData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  // const [dates, setDates] = useState(new Date());
  // const initialDate = taskData.postingDate ? new Date(taskData.postingDate) : new Date();
  // const [postingDate, setPostingDate] = useState(initialDate);
  const [postingDate, setPostingDate] = useState(new Date());
  const [dates, setDates] = useState(new Date());

  const handleUpdateTaskSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    const updatedTask = {
      positiontitle: form.positiontitle.value,
      recemail: form.recemail.value,
      cname: form.cname.value,
      cabout: form.cabout.value,
      salary: form.salary.value,
      imageUrl: form.imageUrl.value,
      streetaddress: form.streetaddress.value,
      region: form.region.value,
      postalcode: form.postalcode.value,
      titletask: form.titletask.value,
      taskpriority: form.taskpriority.value,
      taskdescription: form.taskdescription.value,
      date: form.date.value,
      postingDate: postingDate,
    };

    try {
      const response = await axios.put(`https://taskflow-server.vercel.app/tasks/${id}`, updatedTask);
      if (response.data.modifiedCount > 0) {
        Swal.fire('Success!', 'Task updated successfully', 'success');
        navigate('/dashboard/projects');
      } else {
        Swal.fire('Error!', 'No changes were made or something went wrong.', 'error');
      }
    } catch (error) {
      console.error('Failed to update Task', error);
      Swal.fire('Error!', 'An error occurred while updating the Task.', 'error');
    }
  };

 
    
  return (
    <div>
      <p className="text-base font-semibold leading-7 text-gray-900">
        Task ID is {id}
      </p>
      <form onSubmit={handleUpdateTaskSubmit}>
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
                    defaultValue={taskData.titletask}
                    // name="positiontitle"
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
                    defaultValue={taskData.recemail}
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
                    defaultValue={taskData.cname}
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
                    defaultValue={taskData.cabout}
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
                    defaultValue={taskData.salary}
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
                    defaultValue={taskData.imageUrl}
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
                    defaultValue={taskData.streetaddress}
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
                    defaultValue={taskData.region}
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
                    defaultValue={taskData.postalcode}
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
                    defaultValue={taskData.titletask}
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
                    defaultValue={taskData.taskpriority}
                    autoComplete="taskpriority"
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
                    defaultValue={taskData.taskdescription}
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
                  defaultValue={taskData.date}
                  // selected={postingDate}
                  // onChange={(date) => setPostingDate(date)}
                  selected={postingDate}
                  onChange={(date) => setPostingDate(date)}
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

export default UpdateTask;

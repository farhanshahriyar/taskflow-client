import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import css
import Swal from "sweetalert2";
import uploadImgToImgBB from "../../../utils/imgbbUpload";
import { MdCancel } from "react-icons/md";

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [postingDate, setPostingDate] = useState(new Date());
  const [dates, setDates] = useState(new Date());
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        setImageFile(file); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTaskInfo = async (e) => {
    e.preventDefault();

    // Log the form data for debugging
    const form = e.target;
    console.log(form.useremail.value);
    console.log(form.recemail.value);
    console.log(form.cname.value);
    console.log(form.cabout.value);
    console.log(form.salary.value);
    console.log(form.streetaddress.value);
    console.log(form.region.value);
    console.log(form.postalcode.value);
    console.log(form.titletask.value);
    console.log(form.taskpriority.value);
    console.log(form.taskdescription.value);
    console.log(form.date.value);
    console.log(dates);
    console.log(imageFile);

    if (imageFile) {
      try {
        const imageUrl = await uploadImgToImgBB(imageFile);
        // Make sure imageUrl is not undefined
        console.log(imageUrl);

        const finalTaskData = {
          imageUrl,
          useremail: form.useremail.value,
          recemail: form.recemail.value,
          cname: form.cname.value,
          cabout: form.cabout.value,
          salary: form.salary.value,
          streetaddress: form.streetaddress.value,
          region: form.region.value,
          postalcode: form.postalcode.value,
          titletask: form.titletask.value,
          taskpriority: form.taskpriority.value,
          taskdescription: form.taskdescription.value,
          status: "notStarted",
          date: form.date.value,
          postingDate: dates,
        };
        console.log(finalTaskData);

        // Send the data to the server
        // axios post request
        axios.post("http://localhost:5000/tasks", finalTaskData)
          .then((response) => {
            console.log(response);
            Swal.fire({
              title: "Success!",
              text:
                "Task Added Successfully sent!",
              icon: "success",
              confirmButtonText: "Ok",
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
    // form reset
    e.target.reset();
    // image preview reset
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div>
      <form onSubmit={handleTaskInfo}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Add Task
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
                    id="salary"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image Upload (Optional)
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                      >
                        <span>Upload a file</span>
                        <input
                          onChange={handleImageChange}
                          id="file-upload"
                          name="fileupload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, Gif up to 10MB
                    </p>
                    {imagePreview && (
                      <div>
                        <p className="text-xs leading-5 text-gray-600">
                          You have uploaded:
                        </p>
                        <MdCancel
                          onClick={() => {
                            setImageFile(null);
                            setImagePreview(null);
                          }}
                          className="cursor-pointer text-red-500 hover:text-red-600"
                        />
                        <img
                          src={imagePreview}
                          alt="Uploaded"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </div>
                    )}
                  </div>
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
              {/* <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

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
                    name="taskpriority"
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
                    name="taskdescription"
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
                  name="date"
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tasks;

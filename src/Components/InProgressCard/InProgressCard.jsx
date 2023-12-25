import React from "react";

const InProgressCard = ({
  _id,
  cname,
  taskpriority,
  titletask,
  taskdescription,
  date,
  postingDate,
  setRefetech
}) => {

    const handleInProgressTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}/complete`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'completed' }),
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
    <div className="mt-5 rounded-xl shadow-xl bg-white">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {titletask}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{cname}</p>
          </div>

          {/* <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div> */}
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {taskdescription}
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-xs font-medium text-gray-600">Task Published</dt>
            <dd className="text-xs text-gray-500">{postingDate}</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-xs font-medium text-gray-600">
              Task Priority: {taskpriority}
            </dt>
            <dd className="text-xs text-gray-500">Task Deadline: {date}</dd>
          </div>
        </dl>
          <div className="flex justify-end mt-2">
            <button onClick={() => handleInProgressTask(_id)}
             className="group relative inline-block overflow-hidden bg-orange-600  hover:bg-cyan-600 border px-8 py-3 focus:outline-none focus:ring cursor-pointer">
              <span className="text-xs font-medium text-white">InProgress</span>
            </button>
          </div>
      </a>
    </div>
  );
};

export default InProgressCard;

import React from "react";
import NotAvailable from "../../../../public/not-available.jpg";

const Message = () => {
    
  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-10 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            {/* <img src={errorLogo} alt="Page not found" className='h-40' /> */}
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              No Content Available!
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Taskflow Message page is not available for now. Its in under construction. Please visit later.
            </p>
            <a
              href="/"
              className="mt-4 inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-400"
            >
              ← Back to home
            </a>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              className="w-full max-w-md object-cover"
              src={NotAvailable}
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

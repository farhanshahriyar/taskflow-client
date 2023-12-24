/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(logout)
  console.log(user);

  // logout functionalities
  const handleLogout = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
          text: "You are logged out successfully!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold text-[#2F2F2F] dark:text-white"
              href="/"
              aria-label="Brand"
            >
              TaskFlow
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className="font-medium text-green-600 md:py-6 dark:text-green-500"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Features
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Pricing
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Integrations
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Contact
              </a>

              {/* user conditions */}
              {(user && (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4 group">
                  <div className="flex items-center gap-2 cursor-pointer">
                    {/* User profile and name */}
                    <img
                      alt="User"
                      src={user?.photoURL}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <strong className="font-medium text-gray-900">
                        {user?.displayName}
                      </strong>
                      <strong className="font-medium text-gray-500">
                        {user?.email}
                      </strong>
                    </div>
                    {/* Dropdown Icon */}
                    <span className="shrink-0 transition duration-300 text-black">
                      {/* SVG icon */}
                    </span>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                    
                    <a
                      href="/user-profile"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-800 hover:text-white"
                    >
                      Profile settings
                    </a>
                    <a
                      href="/dashboard/projects"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-800 hover:text-white"
                    >
                      Dashboard
                    </a>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-800 hover:text-white cursor-pointer"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )) || (
                <a
                  className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                  href="/login"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

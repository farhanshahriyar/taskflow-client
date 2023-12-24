import React from "react";
import { motion } from "framer-motion";

const Banner = () => {  
  const bannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    TimeRanges : { opacity: 1, y: 0 },
  };


  return (
    <motion.div
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, ease: "easeOut" }}
    variants={bannerVariants}
  >
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
              href="#"
            >
              Task Solutions maintaining the highest standards
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-green-600 ps-2 dark:text-green-500">
                  Explore
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-green-600"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-6xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Task Management Reimagined: <br></br>
                <span className="text-green-600 dark:text-green-500">
                    Experience the TaskFlow Advantage  
                </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Want better result in your organization? Task Manager is the best and it helps teams get clarity on exactly who’s doing what by when. It’s the easiest way to manage projects, track tasks, and automate workflows.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-600 to-green-600 hover:from-green-600 hover:to-green-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/login"
            >
              Get Started with TaskFlow
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;

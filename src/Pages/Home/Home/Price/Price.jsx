import React from "react";
import { motion } from 'framer-motion';

const Price = () => {
   // Animation variants for the pricing cards
   const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div>
       <div className="flex justify-center mt-5 mb-2">
        <a
          className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
          href="#pricing"
        >
          Pricing
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

      <div className="overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
              Pricing Made Easy for Everyone
            </h2>
          </div>

          <div className="relative xl:w-10/12 xl:mx-auto">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* <div> */}
              <motion.div variants={cardVariants}>
                <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Professional
                  </h3>
                  <div className="text-sm text-gray-500">
                    Everything a small team needs.
                  </div>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">
                      $18
                    </span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      .00
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Up to 10 people
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Collect data
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Code extensibility
                        </span>
                      </li>
                    </ul>

                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Custom reports
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Product support
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500 hover:underline">Cancel anytime.</p>
                      <p className="text-sm text-gray-500 hover:underline">No card required.</p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-green-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                </motion.div>
              {/* </div> */}

              {/* <div> */}
              <motion.div variants={cardVariants}>
                <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Teams
                  </h3>
                  <div className="text-sm text-gray-500">
                    For growing businesses.
                  </div>
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-gray-800">
                    Most popular
                  </span>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">
                      $36
                    </span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      .99
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Up to 10 people
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Collect data
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Code extensibility
                        </span>
                      </li>
                    </ul>

                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Custom reports
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Product support
                        </span>
                      </li>

                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-50 text-green-600 dark:bg-green-800/30 dark:text-green-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500 hover:underline">Cancel anytime.</p>
                      <p className="text-sm text-gray-500 hover:underline">No card required.</p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                </motion.div>
              {/* </div> */}
            </motion.div>

            <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
              <svg
                className="w-16 h-auto text-green-800"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth="10"
                 
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth="10"
                 
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth="10"
                 
                />
              </svg>
            </div>

            <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                className="w-56 h-auto text-green-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth="7"
       
                />
              </svg>
            </div>
          </div>

          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">
              Prices in USD. Taxes may apply. Bangladeshi pricing shown in USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

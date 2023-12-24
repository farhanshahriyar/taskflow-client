import React from "react";
import TestimonialCard from "../../../../Components/TestimonialCard/TestimonialCard";
import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Several task management apps have tried to make the process easier, but none have succeeded as well as TaskFlow. It’s the perfect combination of simplicity and functionality.",
    name: "Leslie Alexander",
    handle: "@lesliealexander",
  },
  {
    img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/402631613_167661136427558_6140417869398755145_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=gY3TJXOQCFsAX-xr7v2&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCq-5hI7hQY69JhSo_f9xk40xR6XVcHn_6qDhH7bmhV6w&oe=6589A348",
    quote:
      "Not only does TaskFlow offer exceptional task management features, but their customer service is also second to none. They are always quick to respond and resolve any issues.",
    name: "Abir Shahriyar",
    handle: "@abirxhants",
  },
  {
    img: "https://media.istockphoto.com/id/1179600332/photo/a-portrait-of-attractive-young-business-man-in-modern-office-asian-people-office-lifestyle.webp?s=170667a&w=0&k=20&c=qJHndYHgSIpBqmtXrsLjhL0mUZPaB6-QL5PIX2DMUk4=",
    quote:
      "We've tried various task management apps in the past, but none have come close to the ease of use and functionality of TaskFlow. It's the perfect solution for our team.",
    name: "Sakinur Rahman",
    handle: "@sakinurrahman",
  },
];

const Testimonials = () => {
  // Animation variants for the components
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="flex justify-center mb-5">
        <a
          className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
          href="#testimonials"
        >
          Testimonials
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

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
              Trusted by more than 10k people
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              //   <TestimonialCard key={index} {...testimonial} />
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

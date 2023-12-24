import React from "react";

const TestimonialCard = ({ img, quote, name, handle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex items-center gap-2">
        <img className="w-14 h-14 rounded-full" src={img} alt="" />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-gray-600">{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

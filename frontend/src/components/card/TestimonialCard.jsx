import React from "react";

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img
        src={image}
        alt={name}
        className="rounded-full mx-auto w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default TestimonialCard;

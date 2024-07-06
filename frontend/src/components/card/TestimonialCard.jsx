import React from "react";

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className="">
      <div className="flex items-center justify-center px-0 md:px-10 lg:px-20 xl:px-52 py-6">
        <div className="mr-14">
          <img
            src={image}
            alt={name}
            className="w-full h-[20rem] object-cover mb-4 pl-8 md:pl-0"
          />
        </div>
        <div className="pt-4 px-5 lg:px-0">
          <p className="text-gray-600 w-100% lg:w-[100%]">{text}</p>
          <h3 className="text-xl font-bold mb-2 pt-10">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

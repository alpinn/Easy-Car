import React from "react";
import UserImage from "../../assets/user.png";

const TestimonialCard = ({ name, text }) => {
  console.log(name, text);
  return (
    <div className="">
      <div className="flex items-center justify-center px-9 lg:px-12 xl:px-28 py-6">
        <div className="mr-0 lg:mr-14">
          <img
            src={UserImage}
            className="w-full h-[20rem] object-cover mb-4"
          />
        </div>
        <div className="pt-4 px-5 lg:px-0">
          <p className="text-gray-600 w-100% lg:w-[70%]">{text}</p>
          <h3 className="text-xl font-bold mb-2 pt-10">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

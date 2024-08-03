import React from "react";
import UserImage from "../../assets/user.png";

const TestimonialCard = ({ testi }) => {
  return (
    <div className="flex items-center px-9 lg:px-20 xl:px-28 py-6">
      <div className="mr-0 ">
        <img
          src={UserImage}
          className="w-full h-[15rem] object-cover mb-4"
        />
      </div>
      <div className="pt-4 px-5 md:px-14 lg:px-20">
        <p className="text-gray-600 w-100% lg:w-[70%]">{testi.opinion}</p>
        <h3 className="text-xl font-bold mb-2 pt-10">{testi.name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;

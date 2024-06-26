import React from "react";
import CarCard from "./CardCard";

const CardDeals = () => {
  return (
    <div className="app bg-[#f5f7fc]">
      <div className="py-12 px-12 mx-auto md:px-16 lg:px-[4.5rem] lg:min-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Most popular cars rental deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CarCard />
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Show All Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDeals;

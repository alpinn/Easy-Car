"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";

const CarCard = ({ car, price, rentNow }) => {
  return (
    <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover p-4 rounded-lg"
      />
      <div className="">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800 px-4">{car.name}</h2>
        </div>
        <ul className="mt-2 px-4 py-2 text-sm text-gray-600 flex gap-[27rem] lg:gap-[5.5rem]">
          <div className="mb-2">
            <li className="flex items-center">
              <FaUser className="mr-2" />
              <p>{car.seat} Orang</p>
            </li>
            <li className="flex items-center">
              <GiGearStickPattern className="mr-2" />
              <p>{car.type}</p>
            </li>
          </div>
          <div>
            <li className="flex items-center">
              <GiCarDoor className="mr-2" />
              <p>{car.door} Pintu</p>
            </li>
            <li className="flex items-center">
              <BsFuelPumpFill className="mr-2" />
              <p>{car.fuel}</p>
            </li>
          </div>
        </ul>
        <div className="border-b"></div>
        <div className="mt-4 px-4 pb-4 flex justify-between items-center">
          <span className="text-md font-semibold text-gray-800">
            {price}/hari
          </span>
          <button className="text-blue-500 font-bold py-2 px-4 rounded-md">
            Rental →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

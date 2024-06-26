"use client";
import React from "react";

const CarCard = () => {
  return (
    <div className="app">
      <div className="p-4 md:w-[15rem] rounded-lg bg-white shadow-md">
        <img
          src=""
          alt=""
          className="w-full h-48 rounded-lg object-cover"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800">AA</h3>
          <div className="flex items-center mt-2">
            <span className="text-sm font-bold text-yellow-500">2</span>
            <span className="text-sm text-gray-600 ml-2">2</span>
          </div>
          <div className="flex mt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m2-2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8m-2 2h-2.5"
                />
              </svg>
              <span className="text-sm text-gray-600 ml-2">2</span>
            </div>
            <div className="flex items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0 1 18 0z"
                />
              </svg>
              <span className="text-sm text-gray-600 ml-2">asd</span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11z"
                />
              </svg>
              <span className="text-sm text-gray-600 ml-2">
                Air Conditioning
              </span>
            </div>
            <div className="flex items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v8z"
                />
              </svg>
              <span className="text-sm text-gray-600 ml-2">2 Doors</span>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg font-bold text-gray-800">$1000/day</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

import React from "react";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const ThreeStep = () => {
  return (
    <div className="container mx-auto px-4 py-16 lg:mt-12 lg:min-h-screen">
      <div className="px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Sewa mobil dengan mengikuti 3 steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-[7.5rem]">
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 rounded-full mx-auto bg-blue-100 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-4xl" />
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.914a2 2 0 01-2.828 0L9.257 16.657m5.656-5.657a2 2 0 10-2.828-2.828l-7.964 7.964m2.828 2.828L13.414 11.828a2 2 0 10-2.828 2.828l7.964-7.964"
              />
            </svg> */}
            </div>
            <h3 className="text-xl font-bold mb-2">Pilih Lokasi</h3>
            <p className="text-gray-600">
              Pilih lokasi dan temukan mobil terbaik.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <MdDateRange className="text-blue-500 text-4xl" />
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg> */}
            </div>
            <h3 className="text-xl font-bold mb-2">Tanggal penjemputan</h3>
            <p className="text-gray-600">
              Pilih tanggal waktu penjemputan untuk memesan mobil Anda.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaCar className="text-blue-500 text-4xl" />

              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> */}
            </div>
            <h3 className="text-xl font-bold mb-2">Pesan mobil Andar</h3>
            <p className="text-gray-600">
              Pesan mobil Anda dan kami akan mengirimkannya langsung kepada
              Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;

import React from "react";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const ThreeStep = () => {
  return (
    <div className="container mx-auto px-4 py-16 lg:mt-12 lg:min-h-screen">
      <div className="px-12">
        <h2 className="text-xl font-bold text-center text-[#aeb0b5] mb-4 uppercase">
          Cara Kerja Kami
        </h2>
        <p className="text-3xl font-bold text-center mb-8">
          Dengan mengikuti 3 langkah
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-[7.5rem]">
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 rounded-full mx-auto bg-blue-100 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pilih Lokasi</h3>
            <p className="text-gray-600">
              Pilih lokasi dan temukan mobil terbaik.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <MdDateRange className="text-blue-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tanggal penjemputan</h3>
            <p className="text-gray-600">
              Pilih tanggal waktu penjemputan untuk memesan mobil Anda.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaCar className="text-blue-500 text-4xl" />
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

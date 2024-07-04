import React from "react";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import HondaLogo from "../../assets/honda.svg";
import HyundaiLogo from "../../assets/hyundai.svg";
import NissanLogo from "../../assets/nissan.svg";
import SuzukiLogo from "../../assets/suzuki.svg";
import ToyotaLogo from "../../assets/toyota.svg";
import MitsubishiLogo from "../../assets/mitsubishi.svg";

const ThreeStep = () => {
  return (
    <div className="container mx-auto px-4 py-6 lg:mt-12 lg:min-h-screen">
      <div className="flex flex-row justify-center items-center gap-10 md:gap-16 lg:gap-36 mb-10 lg:mb-20">
        <img
          src={HondaLogo}
          alt="Logo Honda"
          width="45"
        />
        <img
          src={HyundaiLogo}
          alt="Logo Hyundai"
          width="45"
        />
        <img
          src={NissanLogo}
          alt="Logo Nissan"
          width="45"
        />
        <img
          src={SuzukiLogo}
          alt="Logo Suzuki"
          width="45"
        />
        <img
          src={ToyotaLogo}
          alt="Logo Toyota"
          width="45"
        />
        <img
          src={MitsubishiLogo}
          alt="Logo Mitsubishi"
          width="45"
        />
      </div>

      <div className="px-4">
        <div className="font-bold text-center">
          <h2 className="text-xl  text-[#aeb0b5] mb-4 uppercase">
            Cara Kerja Kami
          </h2>
          <p className="text-3xl mb-2 md:mb-4 lg:mb-8">
            Dengan mengikuti 3 langkah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-5">
          <div className="mb-12">
            <div className="bg-white p-10 mb-5 mx-auto w-fit rounded-[1.5rem] shadow-xl">
              <FaMapMarkerAlt className="text-blue-400 text-5xl" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Pilih Lokasi</h3>
              <p className="text-gray-600 px-20 pt-3">
                Pilih lokasi dan temukan mobil terbaik.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <div className="bg-[#6aa5fc] p-10 mb-5 mx-auto w-fit rounded-[1.5rem] shadow-xl">
              <MdDateRange className="text-white text-5xl" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Tanggal penjemputan</h3>
              <p className="text-gray-600 px-10 lg:px-20 pt-3">
                Pilih tanggal waktu penjemputan untuk memesan mobil Anda.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-10 mb-5 mx-auto w-fit rounded-[1.5rem] shadow-xl">
              <FaCar className="text-blue-400 text-5xl" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Pesan mobil Anda</h3>
              <p className="text-gray-600 px-12 lg:px-14 pt-3">
                Pesan mobil Anda dan kami akan mengirimkannya langsung kepada
                Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;

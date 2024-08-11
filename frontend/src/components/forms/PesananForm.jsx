import React from "react";
import CarImg from "../../assets/car.png";

import { FaRegUser } from "react-icons/fa6";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { PiEngine } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import DatePicker from "../atoms/DatePicker";
import { Link } from "react-router-dom";

const PesananForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col lg:flex-row overflow-hidden gap-14">
          <div className="bg-white rounded-lg px-4 py-6 mb-4 shadow-md">
            <div className="border rounded-lg py-2 pl-2 pr-20">
              <div className="flex flex-row items-center gap-4">
                <div>
                  <img
                    src={CarImg}
                    alt="mobil"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-base mb-4 pb-2">
                    Nama Mobil
                  </h2>
                  <div className="flex flex-row gap-10">
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">kursi</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">3</p>
                          <FaRegUser size={15} />
                        </li>
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">transmisi</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">Manual</p>
                          <PiEngine size={15} />
                        </li>
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">pintu</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">3</p>
                          <GiCarDoor size={15} />
                        </li>
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">
                        bahan bakar
                      </h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">3</p>
                          <BsFuelPump size={15} />
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl leading-relaxed mt-5 mb-3">
                Masukkan Data Diri
              </h2>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Nama Lengkap*
                </label>
                <input
                  type="text"
                  className="border h-9 border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Tanggal Ambil*
                    </label>
                    <DatePicker required />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Waktu Ambil*
                    </label>
                    <input
                      type="time"
                      step="900" // Add this attribute
                      value="08:00"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Nomor HP/Telepon*
                    </label>
                    <input
                      type="text"
                      className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Tanggal Kembali*
                    </label>
                    <DatePicker required />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Waktu Kembali*
                    </label>
                    <input
                      type="time"
                      step="900" // Add this attribute
                      value="08:00"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/3 h-fit p-4 mb-4 shadow-md rounded-lg">
            <h1 className="font-bold leading-relaxed text-lg mb-3">
              Deskripsi Pemesanan
            </h1>
            <div className="mb-1">
              <div className="font-semibold">
                <p className="uppercase text-neutral-500 text-sm mb-2">
                  Anda memilih mobil:
                </p>
                <span className="text-base">Nama Mobil</span>
              </div>
            </div>
            <div className="mb-5">
              <Link to="/book-car">
                <p className="text-sm text-blue-400 font-semibold">
                  Ganti mobil
                </p>
              </Link>
            </div>
            <div className="flex flex-row justify-between font-bold text-green-500">
              <p>Total Harga:</p>
              <span>Rp.</span>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 p-3 w-full mt-5 text-white rounded-lg font-bold text-sm"
            >
              Request Mobil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PesananForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaRegUser } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { PiEngine } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { IoWarning } from "react-icons/io5";

const PesananForm = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [carData, setCarData] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Add this state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    car_id: id,
  });

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: user.name,
        email: user.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    console.log(id);
    if (id) {
      const getCarById = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/cars/${id}`);
          setCarData(response.data); // Set the success message
          console.log(response.data);
        } catch (error) {
          if (error.response) {
            console.log(error);
          }
        }
      };
      getCarById();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/pesan_mobil",
        formData
      );
      console.log(response.data);
      setSuccessMessage(
        "Pemesanan mobil berhasil! Silakan tunggu konfirmasi dari kami."
      );
      // handle success response
    } catch (error) {
      console.error(error.response.data);
      // handle error response
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row overflow-hidden gap-14">
          <div className="bg-white rounded-lg px-4 py-6 mb-4 shadow-md w-full">
            <div className="border rounded-lg py-2 pl-2 pr-20">
              <div className="flex flex-row items-center gap-4">
                <div>
                  <img
                    src={carData.image}
                    alt="gambar mobil"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-base mb-4 pb-2">
                    {carData.name}
                  </h2>
                  <div className="flex flex-row gap-10">
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">kursi</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">{carData.seat}</p>
                          <FaRegUser size={15} />
                        </li>
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">transmisi</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">{carData.transmision}</p>
                          <PiEngine size={15} />
                        </li>
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      <h3 className="uppercase  text-neutral-500">pintu</h3>
                      <div className="flex">
                        <li className="flex items-center">
                          <p className="mr-2">{carData.door}</p>
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
                          <p className="mr-2">{carData.fuel}</p>
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
                  value={formData.name}
                  readOnly
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
                      value={formData.email}
                      readOnly
                      type="email"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Tanggal Ambil*
                    </label>
                    <input
                      value={formData.pickUpDate}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          pickUpDate: e.target.value,
                        });
                      }}
                      type="date"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" // Add this attribute
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Waktu Ambil*
                    </label>
                    <input
                      value={formData.pickUpTime}
                      type="time"
                      step="900"
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, pickUpTime: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Nomor HP/Telepon*
                    </label>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      value={formData.phoneNumber}
                      type="text"
                      required
                      className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Tanggal Kembali*
                    </label>
                    <input
                      value={formData.dropOffDate}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          dropOffDate: e.target.value,
                        });
                      }}
                      type="date"
                      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" // Add this attribute
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Waktu Kembali*
                    </label>
                    <input
                      type="time"
                      step="900" // Add this attribute
                      value={formData.dropOffTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropOffTime: e.target.value,
                        })
                      }
                      className="border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white w-full p-4 shadow-xl rounded-md mb-8">
              <div className="flex w-full gap-2 items-center mb-2">
                <IoWarning
                  color="red"
                  size={25}
                />
                <h1 className="font-bold text-base">Syarat & Ketentuan</h1>
              </div>
              <div className="leading-relaxed">
                <p>
                  <span className="font-semibold">1.</span> Pembayaran hanya
                  bisa melalui transfer bank
                </p>
                <p>
                  <span className="font-semibold">2.</span> Bukti pembayaran
                  bisa di screenshot kirim ke{" "}
                  <span className="font-bold">WhatsApp Kami</span> atau{" "}
                  <span className="font-bold">0123456789</span>
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md p-4 h-fit rounded-lg">
              <h1 className="font-bold leading-relaxed text-lg mb-3">
                Deskripsi Pemesanan
              </h1>
              <div className="mb-1">
                <div className="font-semibold">
                  <p className="uppercase text-neutral-500 text-sm mb-2">
                    Anda memilih mobil:
                  </p>
                  <span className="text-base">{carData.name}</span>
                </div>
              </div>
              <div className="mb-2">
                <Link to="/book-car">
                  <p className="text-sm text-blue-400 font-semibold">
                    Ganti mobil
                  </p>
                </Link>
              </div>
              <p className="font-bold mb-2">BCA - 987654321 (Easy Car)</p>
              <div className="flex flex-row justify-between font-bold text-green-500">
                <p>Total Harga:</p>
                <span>
                  Rp. {carData.price?.toLocaleString().replace(/,/g, ".") || 0}{" "}
                </span>
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 p-3 w-full mt-5 text-white rounded-lg font-bold text-sm"
              >
                Request Mobil
              </button>
              {successMessage && (
                <div className="text-green-500 font-bold text-sm mt-2">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PesananForm;

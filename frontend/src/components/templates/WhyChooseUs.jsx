import React from "react";
import CarImage from "../../assets/car2.png";

import { FaWallet } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { IoChatbubbles } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f5f7fc]">
      <div className="container mx-auto px-14 py-24 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-100% lg:w-1/2">
            <img
              src={CarImage}
              alt="Car"
            />
          </div>
          <div className="md:w-100% lg:w-1/2">
            <div className="md:px-5 lg:px-10">
              <h2 className="text-xl font-bold text-[#aeb0b5] mb-4 uppercase">
                Kenapa memilih kami
              </h2>
              <p className="text-3xl font-bold mb-5 pr-4">
                Kami menawarkan pengalaman terbaik dengan penawaran kami
              </p>
              <div className="flex flex-row">
                <div className="bg-white p-2 rounded-lg shadow-md h-fit mt-6">
                  <FaWallet
                    color="#3083ff"
                    fontSize="20"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">Harga terbaik</h3>
                  <p className="text-[#7d7e80]">
                    Cari harga murah? Kami menawarkan harga 100% murah
                    darimanapun
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="bg-white p-2 rounded-lg shadow-md h-fit mt-6">
                  <Ri24HoursFill
                    color="#3083ff"
                    fontSize="18"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">24-jam pengiriman</h3>
                  <p className="text-[#7d7e80]">
                    Sewa mobil yang Anda inginkan kapanpun dan akan Kami kirim
                    kepada Anda
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="bg-white p-2 rounded-lg shadow-md h-fit mt-6">
                  <IoChatbubbles
                    color="#3083ff"
                    fontSize="18"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">24/7 technical support</h3>
                  <p className="text-[#7d7e80]">
                    Cari harga murah? Kami 100% menawarkan itu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

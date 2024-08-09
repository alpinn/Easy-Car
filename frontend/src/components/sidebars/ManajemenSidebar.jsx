import React from "react";

import { FaListUl } from "react-icons/fa6";
import { FaUser, FaCarSide } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";

const ManajemenSidebar = () => {
  return (
    <div className="fixed bg-[#1c2333] w-60 px-2 py-3 flex-col text-white h-screen z-50 hidden lg:block">
      <Link to="/admin-manajemen-dashboard">
        <div className="flex items-center justify-center py-3">
          <span className="text-neutral-100 text-3xl font-bold">Dashboard</span>
        </div>
      </Link>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        <Link to="/dashboard/car">
          <div className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-[#333a47] ease-out duration-300">
            <FaCarSide fontSize={24} />

            <span className="text-lg">Mobil</span>
          </div>
        </Link>
        <Link to="/dashboard/pesanan">
          <div className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-[#333a47] ease-out duration-300">
            <FaListUl fontSize={24} />
            <span className="text-lg">Pesanan</span>
          </div>
        </Link>
        <Link to="/dashboard/user">
          <div className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-[#333a47] ease-out duration-300">
            <FaUser fontSize={24} />
            <span className="text-lg">User</span>
          </div>
        </Link>
        <Link to="/dashboard/pertanyaan">
          <div className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-[#333a47] ease-out duration-300">
            <MdQuestionAnswer fontSize={24} />
            <span className="text-lg">Pertanyaan</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ManajemenSidebar;

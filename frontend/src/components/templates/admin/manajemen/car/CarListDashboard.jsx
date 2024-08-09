import React from "react";
import CarTable from "../../../../tables/CarTable";
import ManajemenSidebar from "../../../../sidebars/ManajemenSidebar";
import { Link } from "react-router-dom";

const CarListDashboard = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className="w-full min-h-screen bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[16.2rem]">
          <h1 className="text-black text-2xl font-bold mb-5">Daftar Mobil</h1>
          <Link
            to="/dashboard/car/add"
            className="bg-green-500 p-3 rounded-lg"
          >
            <span className="text-white font-bold">Tambah Mobil</span>
          </Link>
          <div className="mt-8">
            <CarTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListDashboard;

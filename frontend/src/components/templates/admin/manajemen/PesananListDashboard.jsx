import React from "react";
import ManajemenSidebar from "../../../sidebars/ManajemenSidebar";

const PesananListDashboard = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className="w-full h-[50rem] bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[16.2rem]">
          <h1 className="text-black text-2xl font-bold mb-5">Daftar Pesanan</h1>

          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default PesananListDashboard;

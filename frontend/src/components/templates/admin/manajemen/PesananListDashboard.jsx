import React from "react";
import ManajemenSidebar from "../../../sidebars/ManajemenSidebar";

const PesananListDashboard = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className=" w-full min-h-screen bg-neutral-200">
        <div className="mt-32 absolute pl-[4.5rem] lg:pl-[20rem]">
          <h1 className="text-black">Daftar Pesanan</h1>
        </div>
      </div>
    </div>
  );
};

export default PesananListDashboard;

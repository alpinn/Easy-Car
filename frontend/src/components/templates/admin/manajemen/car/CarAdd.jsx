import React from "react";
import ManajemenSidebar from "../../../../sidebars/ManajemenSidebar";
import AddCarForm from "../../../../forms/AddCarForm";

const CarAdd = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className="w-full h-[50rem] bg-neutral-200">
        <div className="mt-24 relative pl-[4.5rem] lg:pl-[17rem]">
          <h1 className="text-black text-2xl font-bold mb-5">Tambah Mobil</h1>
          <div>
            <AddCarForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAdd;

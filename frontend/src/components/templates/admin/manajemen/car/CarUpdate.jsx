import React from "react";
import ManajemenSidebar from "../../../../sidebars/ManajemenSidebar";
import UpdateCarForm from "../../../../forms/UpdateCarForm";

const CarUpdate = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className="w-full h-[50rem] bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[16.2rem]">
          <h1 className="text-black text-2xl font-bold mb-5">
            Edit Data Mobil
          </h1>
          <div>
            <UpdateCarForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarUpdate;

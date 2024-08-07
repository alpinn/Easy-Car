import React from "react";
import ManajemenSidebar from "../../../sidebars/ManajemenSidebar";

const Sidebar = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className=" w-full min-h-screen bg-neutral-200">
        <div className="mt-32 absolute pl-[4.5rem] lg:pl-[20rem]">
          <h1 className="text-black">Dashboard Manajemen</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

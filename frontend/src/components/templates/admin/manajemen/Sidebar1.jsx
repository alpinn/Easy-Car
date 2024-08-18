import React from "react";
import AdminSidebar from "../../../sidebars/AdminSidebar";
import AdminTable from "../../../tables/AdminTable";

const Sidebar = () => {
  return (
    <div className="flex flex-row">
      <div>
        <AdminSidebar />
      </div>
      <div className=" w-full min-h-screen bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[16.2rem]">
          <h1 className="text-black text-2xl font-bold mb-5">
            <AdminTable />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

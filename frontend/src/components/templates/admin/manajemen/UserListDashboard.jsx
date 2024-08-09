import React from "react";
import UserTable from "../../../tables/user/UserTable";
import ManajemenSidebar from "../../../sidebars/ManajemenSidebar";

const UserListDashboard = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className=" w-full min-h-screen bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[16.2rem]">
          <h1 className="text-black text-2xl font-bold mb-5">Daftar User</h1>
          <div className="mt-8">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListDashboard;

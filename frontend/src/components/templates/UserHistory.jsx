import React from "react";
import UserPesanan from "../tables/UserPesanan";

const UserHistory = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <div className="container pt-32 mx-auto px-14 py-14 md:px-16 lg:px-[7.2rem]">
        <div>
          <UserPesanan />
        </div>
      </div>
    </div>
  );
};

export default UserHistory;

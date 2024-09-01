import React from "react";
import UserPesanan from "../tables/UserPesanan";

const UserHistory = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <div className="container pt-32 mx-auto px-14 py-14 md:px-16 lg:px-[7.2rem]">
        <div className="bg-white w-full p-4 mb-5 rounded-md shadow-md">
          <h1 className="font-bold text-lg">Keterangan</h1>
          <p>
            1. Pesanan anda akan diproses paling lambat{" "}
            <span className="font-bold">1x24 jam</span>. Harap selalu cek{" "}
            <span className="font-bold">status</span> pesanan anda.
          </p>
          <p>
            3. Jika status pesanan anda{" "}
            <span className="text-green-500 font-bold">Approved</span>, mobil
            rental pesanan anda sudah siap.
          </p>
          <p>
            3. Jika status pesanan anda{" "}
            <span className="text-red-500 font-bold">Rejected</span>, uang anda
            akan kembali sepenuhnya
          </p>
        </div>
        <div>
          <UserPesanan />
        </div>
      </div>
    </div>
  );
};

export default UserHistory;

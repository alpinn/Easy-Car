import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#f5f7fc]">
      <main className="container mx-auto px-14 py-12 md:py-20 md:px-16 lg:py-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-100% lg:w-2/3">
            <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl lg:leading-normal">
              Temukan, pesan, dan sewa mobil di{" "}
              <span className="underline text-blue-500">Easy Car</span>.
            </h2>
            <p className="text-gray-600 mb-6 md:text-lg lg:text-xl">
              Dapatkan mobil dimanapun dan kapanpun Anda membutuhkannya.
            </p>
          </div>
        </div>
        <form action="">
          <div className="bg-white rounded-md shadow-md mt-5 p-6 md:p-10 lg:p-10">
            <div className="flex flex-col gap-5 md:flex-col lg:flex-row justify-between items-center">
              <div className="md:w-1/3 lg:w-1/4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Lokasi
                </label>
                <input
                  type="text"
                  id="location"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search your location..."
                />
              </div>
              <div className="md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
                <label
                  htmlFor="pickup-date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Tanggal Penjemputan
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value="2023-02-15"
                />
              </div>
              <div className="md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
                <label
                  htmlFor="return-date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Tanggal Pengembalian
                </label>
                <input
                  type="date"
                  id="return-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value="2023-02-16"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0">
                Search
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Hero;

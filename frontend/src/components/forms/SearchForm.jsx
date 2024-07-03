import React from "react";
import { useForm } from "react-hook-form";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="bg-white rounded-md shadow-md mt-5 xl:mt-24 p-6 md:p-5 lg:p-8">
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
                placeholder="Cari lokasi..."
                {...register("location", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
              <label
                htmlFor="pickupDate"
                className="block text-gray-700 font-bold mb-2"
              >
                Tanggal Penjemputan
              </label>
              <input
                type="date"
                id="pickupDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("pickupDate", { required: true })}
              />
            </div>
            <div className="md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
              <label
                htmlFor="returnDate"
                className="block text-gray-700 font-bold mb-2"
              >
                Tanggal Pengembalian
              </label>
              <input
                type="date"
                id="returnDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("returnDate", { required: true })}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 lg:mt-7">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;

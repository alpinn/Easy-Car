import React, { useState } from "react";
import axios from "axios";

const AddCarForm = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");
  const [transmision, setTransmision] = useState("");
  const [door, setDoor] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("seat", seat);
    formData.append("transmision", transmision);
    formData.append("door", door);
    formData.append("fuel", fuel);
    formData.append("price", price);

    try {
      const response = await axios.post(
        "http://localhost:5000/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        setError("Car created successfully!");
      } else {
        setError("Failed to create car.");
      }
    } catch (error) {
      setError("Failed to create car.");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 bg-white w-fit px-5 py-3 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-center text-red-600">{error}</p>}
        {success && <p className="text-center text-green-600">{success}</p>}
        <div className="flex flex-row gap-10">
          <div>
            <div className="mb-3">
              <label
                htmlFor="gambar"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gambar Mobil
              </label>
              <input
                type="file"
                id="gambar"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Mobil
              </label>
              <input
                type="text"
                id="nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="kursi"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jumlah Kursi
              </label>
              <input
                type="number"
                id="kursi"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1"
              />
            </div>
            <div>
              <label
                htmlFor="transmisi"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jenis Transmisi
              </label>
              <select
                value={transmision}
                onChange={(e) => setTransmision(e.target.value)}
                className="w-60 bg-gray-50 border border-gray-300"
              >
                <option value="someOption">Matic</option>
                <option value="otherOption">Manual</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label
                htmlFor="pintu"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jumlah Pintu
              </label>
              <input
                type="number"
                id="pintu"
                value={door}
                onChange={(e) => setDoor(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="bensin"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jenis Bensin
              </label>
              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                className="w-60 bg-gray-50 border border-gray-300"
              >
                <option value="listrik">Listrik</option>
                <option value="bensin">Bensin</option>
                <option value="diese">Diesel</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="harga"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Harga
              </label>
              <input
                type="text"
                id="harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 mb-3 py-2 px-4 rounded w-32 focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;

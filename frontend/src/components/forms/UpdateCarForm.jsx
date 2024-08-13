import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCarForm = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");
  const [transmision, setTransmision] = useState("");
  const [door, setDoor] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getCarById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cars/${id}`);
        setImage(response.data.image);
        setName(response.data.name);
        setSeat(response.data.seat);
        setTransmision(response.data.transmision);
        setDoor(response.data.door);
        setFuel(response.data.fuel);
        setPrice(response.data.price);
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.msg);
        }
      }
    };
    getCarById();
  }, [id]);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("seat", seat);
      formData.append("transmision", transmision);
      formData.append("door", door);
      formData.append("fuel", fuel);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      const response = await axios.patch(
        `http://localhost:5000/cars/${id}`,
        formData
      );
      if (response.status === 200) {
        setSuccess("Car updated successfully!");
        navigate("/dashboard/car");
      } else {
        setError("Failed to update car.");
      }
    } catch (error) {
      setError("Failed to update car.");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 bg-white w-fit px-5 py-3 rounded-lg shadow-md"
        onSubmit={handleUpdateCar}
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
                <option value="Matic">Matic</option>
                <option value="Manual">Manual</option>
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
                <option value="Listrik">Listrik</option>
                <option value="Bensin">Bensin</option>
                <option value="Diesel">Diesel</option>
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

export default UpdateCarForm;

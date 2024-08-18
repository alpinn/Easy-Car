import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../card/CardCard";
import { Link } from "react-router-dom";

const CardDeals = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
        setCars(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto px-16 lg:px-28 py-24">
      <div className="text-center">
        <h2 className="text-lg text-[#aeb0b5] mb-4 uppercase font-bold">
          Daftar mobil populer
        </h2>
        <p className="text-3xl font-bold text-gray-800 mb-8">
          Mobil Rental Terpopuler
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            price={car.price.toLocaleString().replace(/\,/g, ".")}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button>
          <Link
            to="/book-car"
            className="border rounded-full font-medium py-3 px-8"
          >
            <span>Tampilkan semua mobil →</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardDeals;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../card/CardCard";

const BookCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState({
    automatic: false,
    manual: false,
    diesel: false,
    petrol: false,
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const filteredCars = cars.filter((car) => {
  //   if (
  //     searchTerm &&
  //     !car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   ) {
  //     return false;
  //   }
  //   if (checked.automatic && car.type !== "Automatic") {
  //     return false;
  //   }
  //   if (checked.manual && car.type !== "Manual") {
  //     return false;
  //   }
  //   if (checked.diesel && car.fuel !== "Diesel") {
  //     return false;
  //   }
  //   if (checked.gasoline && car.fuel !== "Gasoline") {
  //     return false;
  //   }
  //   if (checked.two && car.seat !== "2") {
  //     return false;
  //   }
  //   if (checked.four && car.seat !== "4") {
  //     return false;
  //   }
  //   return true;
  // });

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleCheckboxChange = (e) => {
  //   setChecked((prevChecked) => ({
  //     ...prevChecked,
  //     [e.target.value]: e.target.checked,
  //   }));
  // };
  return (
    <div className="container mx-auto px-14 py-16 md:px-16 lg:px-20">
      {/* <div className="sticky top-0 h-screen w-64 bg-gray-100 p-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <ul>
          <li>
            <input
              type="checkbox"
              value="automatic"
              checked={checked.automatic}
              onChange={handleCheckboxChange}
            />
            <span>Automatic</span>
          </li>
          <li>
            <input
              type="checkbox"
              value="manual"
              checked={checked.manual}
              onChange={handleCheckboxChange}
            />
            <span>Manual</span>
          </li>
        </ul>
      </div> */}
      {/* <div className="flex-1">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Cari Mobil"
          className="p-2 text-sm border text-gray-700 w-full"
        />
        <div className=" flex justify-between w-full lg:w-[40rem] mb-4 mt-4">
          <div>
            <h3 className="text-lg font-medium">Bensin</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="gasoline"
                  checked={checked.gasoline}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Gasoline</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="diesel"
                  checked={checked.diesel}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Diesel</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Kursi</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="gasoline"
                  checked={checked.two}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">2 Kursi</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="diesel"
                  checked={checked.four}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">4 Kursi</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Tipe</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="automatic"
                  checked={checked.automatic}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Automatic</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="manual"
                  checked={checked.manual}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Manual</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            price={car.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookCar;

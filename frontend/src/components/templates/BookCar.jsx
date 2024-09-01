import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../card/CardCard";

const BookCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState({
    automatic: false,
    manual: false,
    diesel: false,
    bensin: false,
    listrik: false,
    four: false,
    six: false,
    one: false,
    fourDoor: false,
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

  const filteredCars = cars.filter((car) => {
    if (
      searchTerm &&
      !car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (checked.automatic && car.transmision !== "Matic") {
      return false;
    }
    if (checked.manual && car.transmision !== "Manual") {
      return false;
    }
    if (checked.diesel && car.fuel !== "Diesel") {
      return false;
    }
    if (checked.bensin && car.fuel !== "Bensin") {
      return false;
    }
    if (checked.listrik && car.fuel !== "Listrik") {
      return false;
    }
    if (checked.four && car.seat < 4) {
      return false;
    }
    if (checked.six && car.seat > 6) {
      return false;
    }
    return true;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [e.target.value]: e.target.checked,
    }));
  };
  return (
    <div className="container mx-auto px-14 py-16 md:px-16 lg:px-28">
      <div className="flex-1">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Cari Mobil"
          className="p-2 text-sm border text-gray-700 w-full"
        />
        <div className="flex justify-between w-1/2 mb-4 mt-4">
          <div>
            <h3 className="text-lg font-medium">Bahan Bakar</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="bensin"
                  checked={checked.bensin}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Bensin</span>
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
              <li>
                <input
                  type="checkbox"
                  value="listrik"
                  checked={checked.listrik}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Listrik</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Jenis Transmisi</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="automatic"
                  checked={checked.automatic}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">Matic</span>
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
          <div>
            <h3 className="text-lg font-medium">Kursi</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="four"
                  checked={checked.four}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">4 Kursi</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="six"
                  checked={checked.six}
                  onChange={handleCheckboxChange}
                />
                <span className="pl-2">6 Kursi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            price={car.price.toLocaleString().replace(/,/g, ".")}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookCar;

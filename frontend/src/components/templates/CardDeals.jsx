import React from "react";
import CarCard from "../card/CardCard";

const CardDeals = () => {
  const cars = [
    {
      name: "Red Mazda 6 - Elite Estate",
      image:
        "https://imgcdn.oto.com/large/gallery/exterior/23/2750/mazda-6-estate-front-angle-low-view-441846.jpg",
      seat: "2",
      type: "Manual",
      door: "4",
      price: "Rp. 1.800",
      fuel: "Diesel",
    },
    {
      name: "Blue Mazda 5 - Elite Estate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisoPRnKgLAuc49cCls8tG7mgJg02JAc3nvA&s",
      seat: "2",
      type: "Manual",
      door: "4",
      price: "Rp. 1.000",
      fuel: "Diesel",
    },
    {
      name: "Jaguar K5 the 2022 F-Type",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QVJB7Vj0wExcZaapShf1H6xhU8B0J-qq2g&s",
      seat: "2",
      type: "Manual",
      door: "4",
      price: "Rp. 1.120",
      fuel: "Diesel",
    },
    {
      name: "Infiniti Q60 Luxury Car",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoZHBvthVJEPZ5vfvRzlTQttRV8_DRYow2Q&s",
      seat: "2",
      type: "Manual",
      door: "4",
      price: "Rp. 1.100",
      fuel: "Diesel",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h2 className="text-lg text-[#aeb0b5] mb-4 uppercase">
          Daftar mobil populer
        </h2>
        <p className="text-3xl font-bold text-gray-800 mb-8">
          Mobil Rental Terpopuler
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.name}
            car={car}
            price={car.price}
            rentNow={car.rentNow}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="border rounded-full font-medium py-3 px-8">
          Tampilkan semua mobil →
        </button>
      </div>
    </div>
  );
};

export default CardDeals;

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarTable = () => {
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

  const handleDelete = async (carId) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${carId}`);
      setCars(cars.filter((car) => car._id !== carId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[100px] text-center">Gambar</TableHead>
          <TableHead className="w-[150px] text-center">Nama Mobil</TableHead>
          <TableHead className="w-[100px] text-center">Jumlah Kursi</TableHead>
          <TableHead className="w-[100px] text-center">
            Jenis Transmisi
          </TableHead>
          <TableHead className="w-[100px] text-center">Jumlah Pintu</TableHead>
          <TableHead className="w-[100px] text-center">Bahan Bakar</TableHead>
          <TableHead className="w-[130px] text-center">Harga Sewa</TableHead>
          <TableHead className="w-[100px] text-center">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car, index) => (
          <TableRow key={car._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.image}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.seat}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.transmision}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.door}
            </TableCell>
            <TableCell className="font-medium text-center">
              {car.fuel}
            </TableCell>
            <TableCell className="font-medium text-center">
              Rp. {car.price}
            </TableCell>
            <TableCell className="font-medium text-center">
              <div className="flex flex-row gap-2">
                <Link
                  to=""
                  className="bg-yellow-500 p-2 rounded"
                >
                  <span>Edit</span>
                </Link>
                <button
                  onClick={() => handleDelete(car._id)}
                  className="bg-red-500 p-2 rounded"
                >
                  <span>Hapus</span>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarTable;

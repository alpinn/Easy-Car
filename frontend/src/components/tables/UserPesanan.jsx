import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UserPesanan = () => {
  const [pesanans, setPesanans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/user/pesanan/");
        console.log(response.data);

        setPesanans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px] text-center">No</TableHead>
          <TableHead className="w-[80px] text-center">ID Pesanan</TableHead>
          <TableHead className="w-[130px] text-center">Nama Mobil</TableHead>
          <TableHead className="w-[100px] text-center">Nomor Telepon</TableHead>
          <TableHead className="w-[120px] text-center">Tanggal Ambil</TableHead>
          <TableHead className="w-[120px] text-center">
            Tanggal Kembali
          </TableHead>
          <TableHead className="w-[130px] text-center">Price</TableHead>
          <TableHead className="w-[100px] text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pesanans.map((pesanan, index) => (
          <TableRow key={pesanan._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan._id}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.car_id.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.phoneNumber}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.pickUpDate}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.dropOffDate}
            </TableCell>
            <TableCell className="font-medium text-center">
              Rp.{" "}
              {pesanan.car_id.price?.toLocaleString().replace(/,/g, ".") || 0}{" "}
            </TableCell>
            <TableCell
              className={`font-bold text-center ${
                pesanan.order === "Approved"
                  ? "text-green-500"
                  : pesanan.order === "Rejected"
                  ? "text-red-500"
                  : ""
              }`}
            >
              {pesanan.order}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserPesanan;

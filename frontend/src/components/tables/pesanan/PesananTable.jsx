import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PesananTable = () => {
  const [pesanans, setPesanans] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (e, pesananId) => {
    setSelectedStatus((prevStatuses) => ({
      ...prevStatuses,
      [pesananId]: e.target.value,
    }));
    axios
      .put(`http://localhost:5000/admin/pesanan/${pesananId}`, {
        order: e.target.value,
      })
      .then((response) => {
        console.log(response.data);
        setPesanans((prevPesanans) =>
          prevPesanans.map((pesanan) => {
            if (pesanan._id === pesananId) {
              return { ...pesanan, order: e.target.value };
            }
            return pesanan;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/pesanan/")
      .then((response) => {
        setPesanans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Re-fetch data when pesanans state changes
    if (pesanans.length === 0) {
      // Add this condition
      axios
        .get("http://localhost:5000/admin/pesanan/")
        .then((response) => {
          console.log(response.data);
          setPesanans(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [pesanans]);

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[100px] text-center">Nama Pemesan</TableHead>
          <TableHead className="w-[100px] text-center">Email Pemesan</TableHead>
          <TableHead className="w-[100px] text-center">Nomor Telepon</TableHead>
          <TableHead className="w-[150px] text-center">Nama Mobil</TableHead>
          <TableHead className="w-[150px] text-center">
            Tanggal Berangkat
          </TableHead>
          <TableHead className="w-[100px] text-center">
            Tanggal Pengembalian
          </TableHead>
          <TableHead className="w-[100px] text-center">Status</TableHead>
          <TableHead className="w-[100px] text-center">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pesanans.map((pesanan, index) => (
          <TableRow key={pesanan._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.user_id.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.user_id.email}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.phoneNumber}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.car_id && pesanan.car_id.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.pickUpDate}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.dropOffDate}
            </TableCell>
            <TableCell className="font-medium text-center">
              {pesanan.order}
            </TableCell>
            <TableCell className="font-medium text-center">
              <select
                className="bg-blue-500 text-white p-2 rounded"
                value={selectedStatus[pesanan._id] || ""}
                onChange={(e) => handleStatusChange(e, pesanan._id)}
                disabled={
                  pesanan.order === "Approved" || pesanan.order === "Rejected"
                }
              >
                <option value="">Select Status</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PesananTable;

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

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (e, userId) => {
    setSelectedStatus((prevStatuses) => ({
      ...prevStatuses,
      [userId]: e.target.value,
    }));
    axios
      .put(`http://localhost:5000/admin/users/change-status/${userId}`, {
        status: e.target.value,
      })
      .then((response) => {
        console.log(response.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user._id === userId) {
              return { ...user, status: e.target.value };
            }
            return user;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Re-fetch data when pesanans state changes
    if (users.length === 0) {
      // Add this condition
      axios
        .get("http://localhost:5000/users")
        .then((response) => {
          //   console.log(response.data);
          setUsers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [users]);

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[100px] text-center">Nama</TableHead>
          <TableHead className="w-[150px] text-center">Email</TableHead>
          <TableHead className="w-[125px] text-center">Status</TableHead>
          <TableHead className="w-[125px] text-center">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {user.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {user.email}
            </TableCell>
            <TableCell className="font-medium text-center">
              {user.status}
            </TableCell>
            <TableCell className="font-medium text-center">
              <select
                className="bg-blue-500 text-white p-2 rounded"
                value={selectedStatus[user._id] || ""}
                onChange={(e) => handleStatusChange(e, user._id)}
                disabled={
                  user.status === "Approved" || user.status === "Rejected"
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

export default AdminTable;

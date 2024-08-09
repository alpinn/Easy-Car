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
import { Link } from "react-router-dom";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[100px] text-center">Nama</TableHead>
          <TableHead className="w-[150px] text-center">Email</TableHead>
          <TableHead className="w-[125px] text-center">Role</TableHead>
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
              {user.role}
            </TableCell>
            <TableCell className="font-medium text-center">
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 p-2 rounded"
              >
                <span>Hapus</span>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;

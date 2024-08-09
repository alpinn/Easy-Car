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

const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contact-us")
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[100px] text-center">Nama</TableHead>
          <TableHead className="w-[150px] text-center">Email</TableHead>
          <TableHead className="w-[650px] text-center">Pesan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((questions, index) => (
          <TableRow key={questions._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {questions.name}
            </TableCell>
            <TableCell className="font-medium text-center">
              {questions.email}
            </TableCell>
            <TableCell className="font-medium text-center">
              {questions.pesan}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QuestionTable;

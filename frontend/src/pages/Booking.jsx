import React from "react";
import Layout from "./Layout";
import BookCar from "../components/templates/BookCar";

const Booking = () => {
  return (
    <div className="min-h-screen pt-20">
      <Layout>
        <BookCar />
      </Layout>
    </div>
  );
};

export default Booking;

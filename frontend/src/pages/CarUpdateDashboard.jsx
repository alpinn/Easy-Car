import React from "react";
import AdminLayout from "./AdminLayout";
import CarUpdate from "../components/templates/admin/manajemen/car/CarUpdate";

const CarUpdateDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <CarUpdate />
      </AdminLayout>
    </div>
  );
};

export default CarUpdateDashboard;

import React from "react";
import AdminLayout from "./AdminLayout";
import CarListDashboard from "../components/templates/admin/manajemen/car/CarListDashboard";

const CarDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <CarListDashboard />
      </AdminLayout>
    </div>
  );
};

export default CarDashboard;

import React from "react";
import AdminLayout from "./AdminLayout";
import CarAdd from "../components/templates/admin/manajemen/car/CarAdd";

const CarAddDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <CarAdd />
      </AdminLayout>
    </div>
  );
};

export default CarAddDashboard;

import React from "react";
import Sidebar from "../components/templates/admin/manajemen/Sidebar";
import AdminLayout from "./AdminLayout";

const ManajemenDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <Sidebar />
      </AdminLayout>
    </div>
  );
};

export default ManajemenDashboard;

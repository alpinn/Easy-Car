import React from "react";
import Sidebar from "../components/templates/admin/manajemen/Sidebar1";
import AdminLayout from "./AdminLayout";

const AdminDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <Sidebar />
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;

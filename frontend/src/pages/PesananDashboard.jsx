import React from "react";
import AdminLayout from "./AdminLayout";
import PesananListDashboard from "../components/templates/admin/manajemen/PesananListDashboard";

const PesananDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <PesananListDashboard />
      </AdminLayout>
    </div>
  );
};

export default PesananDashboard;

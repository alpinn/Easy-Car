import React from "react";
import AdminLayout from "./AdminLayout";
import AkuntansiDashboard from "../components/templates/admin/manajemen/AkuntansiDashboard";

const PesananDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <AkuntansiDashboard />
      </AdminLayout>
    </div>
  );
};

export default PesananDashboard;

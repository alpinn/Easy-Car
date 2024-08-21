import React from "react";
import AdminLayout from "./AdminLayout";
import ApprovalList from "../components/templates/admin/manajemen/ApprovalList";

const ApprovalDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <ApprovalList />
      </AdminLayout>
    </div>
  );
};

export default ApprovalDashboard;

import React from "react";
import AdminLayout from "./AdminLayout";
import UserListDashboard from "../components/templates/admin/manajemen/UserListDashboard";

const UserDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <UserListDashboard />
      </AdminLayout>
    </div>
  );
};

export default UserDashboard;

import React from "react";
import AdminLayout from "./AdminLayout";
import ContactUs from "../components/templates/admin/manajemen/ContactUs";

const ContactUsDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <ContactUs />
      </AdminLayout>
    </div>
  );
};

export default ContactUsDashboard;

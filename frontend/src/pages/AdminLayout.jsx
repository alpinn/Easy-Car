import React from "react";
import DashboardNavbar from "../components/header/DashboardNavbar";
import ScrollToTop from "../components/temp/ScrollToTop";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <ScrollToTop />
        <DashboardNavbar />
        <main>{children}</main>
      </React.Fragment>
    </div>
  );
};

export default AdminLayout;

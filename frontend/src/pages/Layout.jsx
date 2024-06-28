import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default Layout;

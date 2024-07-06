import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

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

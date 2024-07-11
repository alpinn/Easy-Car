import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/temp/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default Layout;

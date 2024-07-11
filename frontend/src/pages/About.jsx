import React from "react";
import Layout from "./Layout";
import Navbar from "../components/header/Navbar";
import AboutUs from "../components/templates/AboutUs";
import Whatsaap from "../atoms/Whatsaap";

const About = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <AboutUs />
        <Whatsaap />
      </Layout>
    </div>
  );
};

export default About;

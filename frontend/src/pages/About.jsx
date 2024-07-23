import React from "react";
import Layout from "./Layout";
import AboutUs from "../components/templates/AboutUs";
import Whatsaap from "../components/atoms/Whatsaap";

const About = () => {
  return (
    <div className="bg-[#f5f7fc]">
      <Layout>
        <AboutUs />
        <Whatsaap />
      </Layout>
    </div>
  );
};

export default About;

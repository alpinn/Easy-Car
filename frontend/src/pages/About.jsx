import React from "react";
import Layout from "./Layout";
import AboutUs from "../components/templates/AboutUs";
import Whatsaap from "../atoms/Whatsaap";

const About = () => {
  return (
    <div className="bg-[#f5f7fc] mt-[7.5rem]">
      <Layout>
        <AboutUs />
        <Whatsaap />
      </Layout>
    </div>
  );
};

export default About;

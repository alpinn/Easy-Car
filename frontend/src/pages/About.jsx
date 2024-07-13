import React from "react";
import Layout from "./Layout";
import AboutUs from "../components/templates/AboutUs";
import Whatsaap from "../atoms/Whatsaap";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutUs />
        <Whatsaap />
      </Layout>
    </div>
  );
};

export default About;

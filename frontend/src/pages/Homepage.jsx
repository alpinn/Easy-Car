import React from "react";
import Layout from "./Layout";
import Hero from "../components/templates/Hero";
import ThreeStep from "../components/templates/ThreeStep";
import CardDeals from "../components/templates/CardDeals";
import WhyChooseUs from "../components/templates/WhyChooseUs";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <ThreeStep />
        <WhyChooseUs />
        <CardDeals />
      </Layout>
    </div>
  );
};

export default Homepage;

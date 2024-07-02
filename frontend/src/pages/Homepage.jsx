import React from "react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import ThreeStep from "../components/ThreeStep";
import CardDeals from "../components/CardDeals";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <ThreeStep />
        <CardDeals />
      </Layout>
    </div>
  );
};

export default Homepage;

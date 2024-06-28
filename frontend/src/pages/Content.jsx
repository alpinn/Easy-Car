import React from "react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import Works from "../components/Works";
import CardDeals from "../components/CardDeals";

const Content = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Works />
        <CardDeals />
      </Layout>
    </div>
  );
};

export default Content;

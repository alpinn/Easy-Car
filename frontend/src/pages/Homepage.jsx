import React from "react";
import Layout from "./Layout";
import Hero from "../components/templates/Hero";
import ThreeStep from "../components/templates/ThreeStep";
import CardDeals from "../components/templates/CardDeals";
import WhyChooseUs from "../components/templates/WhyChooseUs";
import Testimonial from "../components/templates/Testimonial";
import Whatsaap from "../components/atoms/Whatsaap";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <ThreeStep />
        <WhyChooseUs />
        <CardDeals />
        <Testimonial />
        <Whatsaap />
      </Layout>
    </div>
  );
};

export default Homepage;

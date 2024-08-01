import React from "react";
import Layout from "./Layout";
import TestimonialForm from "../components/forms/TestimonialForm";

const Testimonial = () => {
  return (
    <div>
      <Layout>
        <div className="min-h-screen pt-20">
          <TestimonialForm />
        </div>
      </Layout>
    </div>
  );
};

export default Testimonial;

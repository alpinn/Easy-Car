import React from "react";
import Layout from "./Layout";
import ContactUsForm from "../components/forms/ContactUsForm";
import Whatsaap from "../components/atoms/Whatsaap";

const Contact = () => {
  return (
    <Layout>
      <ContactUsForm />
      <Whatsaap />
    </Layout>
  );
};

export default Contact;

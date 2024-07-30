import React from "react";
import Layout from "./Layout";
import UpdateProfileForm from "../components/forms/UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <div>
      <Layout>
        <div className="min-h-screen pt-20">
          <UpdateProfileForm />
        </div>
      </Layout>
    </div>
  );
};

export default UpdateProfile;

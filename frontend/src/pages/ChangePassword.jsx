import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/auth-slice.js";

import Layout from "./Layout";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div className="min-h-screen pt-20">
      <Layout>
        <ChangePasswordForm />
      </Layout>
    </div>
  );
};

export default ChangePassword;

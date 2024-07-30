import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ChangePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        password: password,
        confirmPassword: confPassword,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="container mx-auto px-14 py-10 md:px-15 lg:px-[7.2rem] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Ubah Password
          </h2>

          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
            role="alert"
          ></div>
          <form
            onSubmit={updateUser}
            className="flex flex-col gap-4"
          >
            <p className="text-center text-red-600">{msg}</p>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password Baru
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="confPassword"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password Baru
              </label>
              <input
                type="password"
                id="confPassword"
                value={confPassword}
                onChange={(e) => setconfPassword(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;

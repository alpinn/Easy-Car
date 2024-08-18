import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ChangePasswordForm = () => {
  const { id } = useParams(); // Get the id from the URL parameters
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/users/change-password/${id}`,
        {
          password: newPassword,
          confirmPassword,
        }
      );

      if (response.status === 200) {
        setSuccess("Password updated successfully!");
        setError(null);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.msg);
      } else {
        setError("An unknown error occurred");
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
            className=" text-green-700 text-center"
            role="alert"
          >
            {" "}
            {success && <p>{success}</p>}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <p className="text-center text-red-600">{error}</p>
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

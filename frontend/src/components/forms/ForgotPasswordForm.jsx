import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgetPassword } from "../../features/auth-slice.js";
import { useDispatch, useSelector } from "react-redux";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-[25rem]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Lupa Password?</h2>
        </div>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan email"
            />
          </div>

          <button
            type="submit"
            className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>

          {isLoading && <p>Loading...</p>}
          {isSuccess && (
            <p className="text-center text-green-600">
              Success! Cek email anda untuk link reset password.
            </p>
          )}
          {isError && <p>Error: {message}</p>}

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

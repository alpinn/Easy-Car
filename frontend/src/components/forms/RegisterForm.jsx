import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-[25rem]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>

        <form
          className="space-y-4"
          onSubmit={saveUser}
        >
          <p className="text-center text-red-600">{msg}</p>
          <div>
            <label
              htmlFor="nama"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Lorem Ipsum"
            />
          </div>

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
              placeholder="abcd@mail.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confPassword}
              onChange={(e) => setconfPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>

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

export default RegisterForm;

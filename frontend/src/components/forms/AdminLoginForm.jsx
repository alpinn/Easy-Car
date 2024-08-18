import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAdmin, reset } from "../../features/auth-slice.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (admin || isSuccess) {
      // Check the admin type and navigate to the corresponding dashboard
      if (admin?.role === "Admin" && admin?.type === "Mobil") {
        navigate("/dashboard/car");
        dispatch(reset());
      } else if (admin?.role === "Admin" && admin?.type === "Pesanan") {
        navigate("/dashboard/pesanan");
        dispatch(reset());
      } else if (admin?.role === "Admin" && admin?.type === "User") {
        navigate("/dashboard/user");
        dispatch(reset());
      } else if (admin?.role === "Admin" && admin?.type === "Admin") {
        navigate("/admin-dashboard");
        dispatch(reset());
      } else if (admin?.role === "Admin" && admin?.type === "Akuntansi") {
        navigate("/dashboard/akuntansi");
        dispatch(reset());
      }
    }
  }, [admin, isSuccess, navigate, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginAdmin({ email, password }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-[25rem]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>

        <form
          className="space-y-4"
          onSubmit={Auth}
        >
          {isError && <p className="text-center text-red-600">{message}</p>}
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

          <button
            type="submit"
            className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

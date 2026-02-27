import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { getUser, loginUser } from "../store/features/auth-thunks";
import PasswordField from "../components/PasswordField";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { user, error, loading } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    if (!email) {
      return toast.error("Email should not be empty");
    }

    if (!password) {
      return toast.error("Password should not be empty");
    }

    dispatch(loginUser({ email, password }));

    if (user?.success) {
      dispatch(getUser());
      navigate("/home", { replace: true });
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Sign in</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form onSubmit={handleLogin}>
            {/* {error && (
              <div style={{ color: "tomato", fontSize: "16px" }}>{error}</div>
            )} */}

            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <PasswordField password={password} setPassword={setpassword} />

            <div className="flex justify-between w-full py-4">
              <div>
                <p className=" text-gray-600 text-center">
                  <NavLink
                    to="/"
                  >
                    Go Back?
                  </NavLink>
                </p>
              </div>
              <span className="font-bold text-md">
                <Link to="/auth/forgot-password"> Forgot password</Link>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
          </form>
          {/* <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-600 hover:text-white">
            <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button> */}
          <div className=" text-gray-400 flex gap-2 items-center justify-center">
            <span>Don't have an account?</span>
            <span className="font-bold text-black">
              <NavLink to="/auth/signup">Sign up for free</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

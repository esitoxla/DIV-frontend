import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getUser, loginUser } from "../store/features/auth-thunks";
import PasswordField from "../components/PasswordField";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState(" ");
  const [password, setpassword] = useState(" ");

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Email or password should not be empty");
    }

    dispatch(loginUser({ email, password }));

    dispatch(getUser());

    toast.success("You have signed up successfully!");
    navigate("/dashboard/profile");
  }

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
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <PasswordField password={password} setPassword={setpassword}/>

            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember me</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign in
            </button>
          </form>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-600 hover:text-white">
            {/* <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" /> */}
            Sign in with Google
          </button>
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

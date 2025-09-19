import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/features/auth-thunks";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, loading } = useSelector((store) => store.auth);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  async function handleRegister(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      businessName,
      email,
      password,
      // confirmPassword,
    } = userDetails;

    if (!firstName) {
      return toast.error("First name required");
    }
    if (!lastName) {
      return toast.error("Last name required");
    }
    if (!businessName) {
      return toast.error("Business name required");
    }
    if (!email) {
      return toast.error("Email required");
    }
    if (!password) {
      return toast.error("Password required");
    }

    dispatch(
      registerUser({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        businessName: userDetails.businessName,
        email: userDetails.email,
        password: userDetails.password,
        // confirmPassword: userDetails.confirmPassword
      })
    );

    if (user?.success) {
      toast.success("You have signed up successfully!");
      navigate("/auth/login", { replace: true });
    }
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14 w-full">
          <span className="mb-3 text-4xl font-bold">Sign Up</span>
          <span className="font-light text-gray-400 mb-8">
            Exciting to have you here! Please enter your details
          </span>

          {/* First & Last Name Row */}
          <form onSubmit={handleRegister}>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">First Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  value={userDetails.firstName}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">Last Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  value={userDetails.lastName}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">Business Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  value={userDetails.businessName}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      businessName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col py-4 w-full">
                <span className="mb-2 text-md">Repeat Password</span>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  // value={userDetails.confirmPassword}
                  // onChange={(e) =>
                  //   setUserDetails({
                  //     ...userDetails,
                  //     confirmPassword: e.target.value,
                  //   })
                  // }
                />
              </div>
            </div>

            {/* Button Centered */}
            <div className="flex justify-center">
              <button
                className="w-full bg-blue-600 text-white p-2 rounded-lg my-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center text-gray-400 flex gap-2 items-center justify-center">
            <span>Don't have an account?</span>
            <span className="font-bold text-black">
              <NavLink to="/auth/login">Sign in</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

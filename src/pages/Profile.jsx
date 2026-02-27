import React, { useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { getUser, logoutUser } from "../store/features/auth-thunks";
import { toast } from "react-toastify";
import ProfileUpload from "../components/ProfileUpload";

export default function Profile() {
  const dispatch = useDispatch();

  const { user, error, loading } = useSelector((store) => store.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    } else {
      setFormData({
        username: user.businessName || "",
        email: user.email || "",
        password: "",
        repeatPassword: "",
        about: user.about || "",
      });
    }
  }, [user, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center py-[3rem] bg-gray-100">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg w-[80%]  h-full flex flex-col gap-6 overflow-hidden p-6">
        {/* Header */}
        <div className="w-full flex relative flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="px-0 sm:px-6 text-2xl sm:text-3xl font-bold text-[#223962] mb-4 sm:mb-0">
            Profile
          </h2>
        </div>

        {/* Content */}
        <div className="px-0 sm:px-6">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/*  Socials */}
            <div className="flex flex-col items-start gap-8 mb-6 w-full lg:w-[30%]">
              <ProfileUpload />

              {/* Socials (unchanged) */}
              {/* <div className="flex gap-4 justify-center sm:justify-start">
                <button className="text-blue-600">
                  <FaFacebook size={22} />
                </button>

                <button className="text-sky-500">
                  <FaTwitter size={22} />
                </button>

                <button className="text-pink-600">
                  <FaInstagram size={22} />
                </button>

                <button>
                  <FcGoogle size={22} />
                </button>
              </div> */}
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 gap-6 md:w-[25rem] text-[#223962]">
              <div>
                <label className="block text-sm font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-200 mt-1 w-full border-0 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">About Me</label>
                <textarea
                  type="text"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  className="mt-1 w-full h-[4rem] py-2 border-0 bg-gray-200 outline-0 rounded-md px-2"
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <NavLink to="/dashboard/update">
                  <button
                    disabled={loading}
                    className="px-6 py-2 bg-[#223962] text-white rounded-lg shadow hover:bg-blue-900 disabled:opacity-50"
                  >
                    {loading ? "Updating..." : "Update Information"}
                  </button>
                </NavLink>

                <p className="text-sm text-center mt-4 font-bold text-[#223962] underline underline-offset-6">
                  <NavLink to="/dashboard/changePass" className="">
                    Change Password?
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
      </div>
    </div>
  );
}

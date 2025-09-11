import React, { useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import profile from "../assets/images/profile.1.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUser, logoutUser } from "../store/features/auth-thunks";
import { toast } from "react-toastify";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  //  Handle profile update
  // async function handleUpdate(e) {
  //   e.preventDefault();

  //   if (formData.password && formData.password !== formData.repeatPassword) {
  //     toast.error("Passwords do not match!");
  //     return;
  //   }

  //   // Build payload for update
  //   const payload = {
  //     businessName: formData.username,
  //     email: formData.email,
  //     about: formData.about,
  //   };
  //   if (formData.password) payload.password = formData.password;

  //   // Dispatch update
  //   await dispatch(updateProfile(payload));

  //   toast.success("Profile updated!");
  // }

  async function handleLogout(e) {
    e.preventDefault();

    // const confirmed = window.confirm("Are you sure you want to logout?");
    // if (!confirmed) return;

    dispatch(logoutUser());

    toast.success("Logout successful!");
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-[3rem]">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg w-[90%]  h-full flex flex-col gap-6 overflow-hidden p-6">
        {/* Header */}
        <div className="w-full flex relative flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="px-0 sm:px-6 text-2xl sm:text-3xl font-bold text-[#223962] mb-4 sm:mb-0">
            Profile
          </h2>

          <ul className="absolute sm:static right-8 sm:right-0">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 cursor-pointer font-medium text-red-500 hover:underline"
            >
              <LogOut size={18} /> Log Out
            </button>
          </ul>
        </div>

        {/* Content */}
        <div className="px-0 sm:px-6">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Avatar + Socials */}
            <div className="flex flex-col items-start gap-8 mb-6 w-full lg:w-[30%]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-gray-300">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="px-3 py-2 text-[#223962] hover:bg-blue-900 hover:text-white font-medium rounded-md hover:text-sm cursor-pointer">
                  Upload Picture
                </button>
              </div>

              {/* Socials (unchanged) */}
              <div className="flex flex-row flex-wrap sm:flex-col gap-3 text-sm sm:text-base justify-center sm:justify-start">
                <button className="flex items-center gap-2 text-blue-600">
                  <FaFacebook size={18} />
                  <span className="text-[#162a4d]">Facebook</span>
                </button>

                <button className="flex items-center gap-2 text-sky-500 ">
                  <FaTwitter size={18} />
                  <span className="text-[#162a4d]">Twitter</span>
                </button>

                <button className="flex items-center gap-2 text-pink-600 ">
                  <FaInstagram size={18} />
                  <span className="text-[#162a4d]">Instagram</span>
                </button>

                <button className="flex items-center gap-2 ">
                  <FcGoogle size={18} />
                  <span className="text-[#162a4d]">Google+</span>
                </button>
              </div>
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
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Repeat Password
                </label>
                <input
                  type="password"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="text-[#223962] mt-6">
          <label className="block text-sm font-medium">About Me</label>
          <textarea
            name="about"
            rows="3"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 w-full md:w-[77%] md:h-[3rem] h-[5rem] border-0 bg-gray-200 outline-0 rounded-md p-2"
          />
        </div>

        {/* Update Button */}
        <div className="text-right mt-6">
          <button
            // onClick={handleUpdate} // 🔹 Hooked update to button
            disabled={loading}
            className="px-6 py-2 bg-[#223962] text-white rounded-lg shadow hover:bg-blue-900 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { getUser, updateUser } from "../store/features/auth-thunks";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { api } from "../config/axios";
import { setUser } from "../store/features/authSlice";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    phone: "",
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
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        businessName: user.businessName || "",
        phone: user.phone || "",
        about: user.about || "",
      });
    }
  }, [user, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put("/auth/update", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Profile updated!");
      console.log("Updated user:", res.data.user);

      setFormData(res.data.user);
      dispatch(setUser(res.data.user));
      navigate("/dashboard/profile");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs z-50">
      <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <button
          onClick={() => navigate("/dashboard/profile")}
          className="absolute top-3 right-6 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        <div className="flex flex-col justify-center p-8 md:p-14 w-full">
          <span className="mb-3 text-4xl font-bold">Update Profile</span>
          <span className="font-light text-gray-400 mb-8">
            Keep your profile up to date
          </span>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First row: 4 inputs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Second row: 2 inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">About</label>
                <input
                  type="text"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 text-center mt-4">
                <NavLink
                  to="/dashboard/profile"
                  className="font-bold text-black hover:underline"
                >
                  Go Back?
                </NavLink>
              </p>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

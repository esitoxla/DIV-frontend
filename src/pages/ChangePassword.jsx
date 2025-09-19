import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { changePassword, logoutUser } from "../store/features/auth-thunks";
import { useAuth } from "../hooks/useAuth";

export default function ChangePassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { error } = useAuth()

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    function handleChangePassword(e) {
        e.preventDefault()

        if (!oldPassword) {
          return alert("password cannot be empty");
        }

        if (!newPassword) {
          return alert("new password cannot be empty");
        }

        if (!confirmNewPassword) {
          return alert("confirm new password cannot be empty");
        }

        if (newPassword !== confirmNewPassword) {
          return alert("password and confirm password must match");
        }

        dispatch(changePassword({ oldPassword, newPassword }));
        alert("Password changed successfully!");
        dispatch(logoutUser());
        navigate("/auth/login", { replace: true });
    }

    if(error) return <div>{error}</div>

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
          <h2 className="mb-3 text-4xl font-bold">Change Password</h2>

          <p className="font-light text-gray-400 mb-8">
            Enter a new password to reset old one
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <CiLock className="text-blue-500 text-xl mr-2" />
              <input
                type="password"
                placeholder="Old Password"
                className="flex-1 outline-none bg-transparent"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <CiLock className="text-blue-500 text-xl mr-2" />
              <input
                type="password"
                placeholder="New Password"
                className="flex-1 outline-none bg-transparent"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <CiLock className="text-blue-500 text-xl mr-2" />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="flex-1 outline-none bg-transparent"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Change Password
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            <Link
              to="/dashboard/profile"
              className="font-bold text-black hover:underline"
            >
              Go Back?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

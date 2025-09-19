import React from 'react'
import { CiLock } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getUser, resetPassword } from '../store/features/auth-thunks';
import { useState } from 'react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { api } from '../config/axios';
import { toast } from 'react-toastify';

export default function ResetPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resetToken } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [valid, setValid] = useState(false);
    const [error, setError] = useState("");

    function handleReset(e) {
        e.preventDefault()

        if (!password) {
          return alert("password cannot be empty");  
        }

        if (!confirmPassword) {
          return alert("confirm password cannot be empty");
        }

        dispatch(resetPassword({ resetToken, password }))
        alert("Password reset successful, login in with new password");
    }

    useEffect(() => {
      async function checkToken() {
        try {
          const res = await api.get(`auth/checklink/${resetToken}`);

          if (res.data.success) {
            setValid(true);
          }
        } catch (error) {
          setValid(false);
          setError(error.response.data.message);
        }
      }
      checkToken();
    }, [resetToken]);

    if (!valid) {
      return (
        <div className="text-center my-4">
          <div>{error || "Something went wrong"}</div>
          <button
            className="border border-gray-400 rounded px-4 py-2 my-4 bg-teal-200"
            onClick={() => navigate("/")}
          >
            Go back to login
          </button>
        </div>
      );
    }


  return (
    <div className="flex items-center h-screen justify-center py-16 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Reset Password
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleReset}>
          <p> Enter a new password to reset old one</p>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <CiLock className="text-blue-500 text-xl mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <CiLock className="text-blue-500 text-xl mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex-1 outline-none bg-transparent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-600  text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Reset Password
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          <Link
            to="/auth/login"
            className="font-bold text-black hover:underline"
          >
            Go Back?
          </Link>
        </p>
      </div>
    </div>
  );
}

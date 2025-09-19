import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router';
import { forgotPassword } from '../store/features/auth-thunks';

export default function ForgotPassword() {

    const [email, setEmail] = useState(" ");
    const dispatch = useDispatch();

    const handleSend = (e) => {
        e.preventDefault();

        dispatch(forgotPassword({ email }));
        alert("Reset link is sent to your email. Thank you!");
    }



  return (
    <div className="flex items-center justify-center h-screen py-16 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Reset Password
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSend}>
          <p> Enter your valid email for a reset link</p>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <AiOutlineMail className="text-blue-600 text-xl mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Send Link
          </button>
          <p className="text-sm text-gray-600 text-center mt-4">
            <Link
              to="/auth/login"
              className="font-bold text-black hover:underline"
            >
              Go Back?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

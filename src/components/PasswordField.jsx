import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({ password, setPassword}) {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-4">
      <span className="mb-2 block text-md">Password</span>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 pr-10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

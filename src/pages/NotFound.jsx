import React from 'react'
import { useNavigate, useRouteError } from 'react-router'
import { Link } from 'react-router';

export default function NotFound() {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h3>Error!!!</h3>

      <p className="text-red-500">Something went wrong</p>

      <p onClick={() => navigate("/", { replace: true })}></p>

      <p>
        You can go back to the homepage by clicking {""}
        <Link to="/" className="text-blue-800 underline">
          here
        </Link>
      </p>
    </div>
  );
}

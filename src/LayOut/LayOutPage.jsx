import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";  // Corrected import path for 'react-router-dom'

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />  {/* This will render the child route's component */}
      <Footer />
    </>
  );
};

export default LayOut;  // Corrected the export to match the usage in App.jsx

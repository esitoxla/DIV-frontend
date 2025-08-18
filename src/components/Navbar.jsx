import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router";
import { span } from "framer-motion/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto justify-between flex lg:px-10 lg:py-6 items-center h-[4rem]">
        <div className="flex w-1/4">
          {/* <div>logo</div> */}
          <div className="font-bold p-2 text-2xl">TLPay</div>
        </div>
        <div className="w-3/4 hidden md:block">
          <div className=" flex justify-around">
            <ul className="flex items-center gap-8 font-medium text-gray-700 cursor-pointer ">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={`relative transition-all duration-300 ease-in-out ${
                        isActive
                          ? "border-b-2 border-blue-500 text-blue-500  absolute"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      Home
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="faqs">
                  {({ isActive }) => (
                    <span
                      className={`relative transition-all duration-300 ease-in-out ${
                        isActive
                          ? "border-b-2 border-blue-500 text-blue-500  absolute"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      FAQs
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="blogs">
                  {({ isActive }) => (
                    <span
                      className={`relative transition-all duration-300 ease-in-out ${
                        isActive
                          ? "border-b-2 border-blue-500 text-blue-500  absolute"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      Blogs
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="price">
                  {({ isActive }) => (
                    <span
                      className={`relative transition-all duration-300 ease-in-out ${
                        isActive
                          ? "border-b-2 border-blue-500 text-blue-500  absolute"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      Pricing
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-3 text-[20px] cursor-pointer pl-10">
              <NavLink to="/auth/login">
                <button className="text-gray-700"> Login</button>
              </NavLink>

              <NavLink to="/auth/signup">
                <button className="border px-3 py-1 bg-blue-400 text-white rounded-sm">
                  Sign up
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* hamburgar */}
        <div className="md:hidden px-4" onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <MdMenu className="text-4xl" />
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute  top-20 left-0 w-full h-screen z-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-8  text-xl font-semibold uppercase bg-blue-600 text-white py-5 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-8 font-medium  cursor-pointer ">
                <NavLink to="/" onClick={() => setOpen(false)}>
                  <li>Home</li>
                </NavLink>

                <NavLink to="faqs">
                  <li>FAQs</li>
                </NavLink>

                <NavLink to="blogs">
                  <li>Blogs</li>
                </NavLink>

                <NavLink to="price">
                  <li>Pricing</li>
                </NavLink>
              </ul>
              <div className="flex flex-col items-center justify-center gap-8 text-[20px] cursor-pointer ">
                <button>Login</button>
                <button className="border px-3 py-1 bg-blue-400 text-white rounded-sm">
                  Sign up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

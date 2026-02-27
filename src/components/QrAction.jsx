import React from "react";
import { NavLink } from "react-router";

export default function QrAction() {
  return (
    <div className="flex justify-center items-center">
      <div className="my-12 w-[80%] h-[60%] bg-blue-600 text-white p-10 rounded-xl text-center flex flex-col gap-5">
        <h3 className="font-bold text-4xl">
          Ready to Create Your First QR Code?
        </h3>
        <div className="text-[20px] font-light">
          <p>Generate, customize, and download QR Instantly,</p>
          <p>free and easy to use!</p>
        </div>
        <div className="">
          <div className="flex gap-2 items-center justify-center">
            <NavLink to="/auth/login">
              <button className="border-0 rounded-sm lg:px-6 py-3 bg-white text-black font-medium mr-5 cursor-pointer">
                Generate Now
              </button>
            </NavLink>

            <NavLink to="/price">
              <button className="border border-white rounded-sm lg:px-6 py-3 font-medium cursor-pointer">
                Upgrade to Pro
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

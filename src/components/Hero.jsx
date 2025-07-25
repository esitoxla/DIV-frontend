import React from 'react'
import qr1 from "../assets/images/qr.1.png";

export default function Hero() {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center gap-5 bg-cover bg-center lg:h-64 h-70 w-full relative"
        style={{ backgroundImage: `url(${qr1})` }}
      >
        <div className="absolute inset-0 bg-blue-200/80"></div>
        <div className="z-20 flex flex-col gap-6">
          <h3 className="lg:text-5xl text-2xl font-bold lg:font-medium text-center flex flex-col gap-6">
            <p>Create Your Own QR Codes,</p>

            <p>and receive payments Instantly</p>
          </h3>
          <p className="text-gray-600 px-4 font-medium text-[20px]">
            Generate unique and customizable QR for your business, events, or
            personal use in seconds. Fast, easy, payments!
          </p>
        </div>
      </div>
    </>
  );
}

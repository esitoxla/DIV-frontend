import React from 'react'
import qr1 from "../assets/images/qr.1.png";

export default function Hero() {
  return (
    <>
      <div
        className="my-12 flex flex-col items-center justify-center gap-5 bg-cover bg-center h-64 w-full relative"
        style={{ backgroundImage: `url(${qr1})` }}
      >
        <div className="absolute inset-0 bg-blue-200/80"></div>
        <div className="z-20 flex flex-col gap-6">
          <h3 className="text-4xl font-bold text-center">
            Create Your Own QR Codes Instantly
          </h3>
          <p className="text-gray-600 font-medium text-[20px]">
            Generate unique and customizable QR for your business, events, or
            personal use in seconds. It's fast, easy, and free!
          </p>
        </div>
      </div>
    </>
  );
}

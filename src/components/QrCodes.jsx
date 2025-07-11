import React from 'react'

export default function QrCodes() {
  return (
    <>
      <div className="bg-gray-50 lg:px-10 py-10">
        <h3 className="text-center text-3xl pb-18 font-bold ">
          Why Choose QR GEN
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 w-full">
          <div className="max-w-sm flex flex-col gap-3 p-6 text-[22px]">
            <span>Icon</span>
            <p className="font-medium">Fast, Simple, and Free</p>
            <p className="text-gray-500 text-[18px]">
              No complicated steps or sign-ups required. Generate and download
              your QR code in seconds, and free.
            </p>
          </div>

          <div className="max-w-sm flex flex-col gap-3 bg-white rounded-xl p-6 text-[22px]">
            <span>Icon</span>
            <p className="font-medium">Customizable Designs</p>
            <p className="text-gray-500 text-[18px]">
              Add colors, logos, and shapes to <p>match your brand identity</p>
              effortlessly.
            </p>
          </div>

          <div className="max-w-sm flex flex-col gap-3 bg-white rounded-xl p-6 text-[22px]">
            <span>Icon</span>
            <p className="font-medium">Track & Edit</p>
            <p className="text-gray-500 text-[18px]">
              Monitor scans and update dynamic
              <p>QR codes anytime with premium</p>
              features.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

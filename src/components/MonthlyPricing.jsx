import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function MonthlyPricing() {
  return (
    <div className="lg:px-10 grid lg:grid-cols-3 grid-cols-1 items-center justify-content-center gap-6 my-8 px-8">
      <div className="flex flex-col gap-3 border-0 rounded-xl shadow-lg  px-8 py-8">
        <h3 className="font-bold mb-2">Free</h3>
        <span className="font-bold text-2xl">$0/mth</span>
        <p className="text-gray-600 font-medium">
          Start for free, no strings attached.
        </p>
        <div className="flex flex-col gap-2">
          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Basic QR codes</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Limited scans</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>PNG Download</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Limited Payments Per Month</p>
          </div>
        </div>

        {/* horizontal line */}
        <div className="border-b border-gray-200 "></div>
        <div className="text-xs font-medium">
          <p className="text-gray-600 ">Additional Feature:</p>
          <p>Basic QR customization (colors, shapes)</p>
        </div>
        <button className=" bg-blue-400 text-white px-2 py-2 rounded font-medium">
          Choose
        </button>
      </div>


      {/* Pro Plan */}
      <div className="flex flex-col gap-3 border-0 rounded-xl shadow-lg px-8 py-8 bg-blue-950 text-white">
        <h3 className="font-bold mb-2">Pro Plan</h3>
        <span className="font-bold text-2xl">$10/mth</span>
        <p className="text-gray-400 font-medium">
          Unlock advanced customization & analytics.
        </p>
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Dynamic QR codes</p>
          </div>

          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Advanced Custom</p>
          </div>

          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Logo uploads</p>
          </div>

          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Scan Tracking</p>
          </div>

          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>50 Payments Per Month</p>
          </div>
          <div className="text-gray-400 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>View Transaction history</p>
          </div>
        </div>

        {/* horizontal line */}
        <div className="border-b border-gray-700 "></div>
        <div className="text-xs font-medium">
          <p className="text-gray-400 ">Additional Feature:</p>
          <p>Expiry-based QR codes</p>
        </div>
        <button className=" bg-blue-400 text-white px-2 py-2 rounded font-medium">
          Choose
        </button>
      </div>

      {/* business */}
      <div className="flex flex-col gap-3 border-0 rounded-xl shadow-lg  px-8 py-8">
        <h3 className="font-bold mb-2">Business</h3>
        <span className="font-bold text-2xl">$20/mth</span>
        <p className="text-gray-600 font-medium">
          Powerful QR solutions for teams & enterprises.
        </p>
        <div className="flex flex-col gap-2">

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Advanced Custom</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Logo uploads</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Scan Tracking</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>White-label QR</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Priority Support</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Custom Features</p>
          </div>
          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>Unlimited Payments per Month</p>
          </div>

          <div className="text-gray-600 font-medium flex gap-2 items-center">
            <span className="text-2xl text-blue-400">
              <IoCheckmarkCircleOutline />
            </span>
            <p>View Transaction history</p>
          </div>
        </div>

        {/* horizontal line */}
        <div className="border-b border-gray-200 "></div>
        <div className="text-xs font-medium">
          <p className="text-gray-600 ">Additional Feature:</p>
          <p>Advanced Security, dedicated account manager</p>
        </div>
        <button className=" bg-blue-400 text-white px-2 py-2 rounded font-medium">
          Choose
        </button>
      </div>
    </div>
  );
}

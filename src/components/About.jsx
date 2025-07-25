import React from "react";
import notice from "../assets/images/notice.png";

export default function About() {
  return (
    <>
      <div className="bg-gray-50 lg:px-10 py-10">
        <h3 className="text-center text-4xl lg:pb-18 font-bold ">
          Why Choose TLPay
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 w-full">
          <div className="max-w-sm flex flex-col gap-3 p-6 text-[22px] m-5">
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=cRLUDYyDinmT&format=png&color=000000"
                alt="qr codes"
                width="60"
                height="60"
              />
            </div>
            <p className="font-medium">Instant QR Code for Payments</p>
            <p className="text-gray-500 text-[18px]">
              Create and download your personalized QR code in seconds. Free and
              customizable. Add colors, logos, and more to match your brand.
            </p>
          </div>

          <div className="max-w-sm flex flex-col gap-3 bg-white rounded-xl p-6 text-[22px] m-5">
            <div>
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/stickers/100/transaction.png"
                alt="transaction"
              />
            </div>
            <p className="font-medium">View Transaction History</p>
            <p className="text-gray-500 text-[18px]">
              Track all your payments in one place. Stay organized with detailed
              records of who paid, how much, and when.
            </p>
          </div>

          <div className="max-w-sm flex flex-col gap-3 bg-white rounded-xl p-6 text-[22px] m-5">
            <span>
              <img src={notice} alt="notice payment" width="60" height="60" />
            </span>
            <p className="font-medium">Receive Payment Notifications</p>
            <p className="text-gray-500 text-[18px]">
              Get instant alerts when payments are made. Never miss a
              transaction with real-time in-app or email notifications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

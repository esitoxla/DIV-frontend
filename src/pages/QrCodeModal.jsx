import React from "react";
import QRCodeGenerator from "../components/QrCodeGenerator";


export default function QrCodeModal() {
  

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl relative h-[90%]">
          <QRCodeGenerator />
        </div>
      </div>
    </>
  );
}

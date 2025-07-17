import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 items-baseline my-6 lg:mx-auto border border-gray-300 bg-white px-4 py-3 lg:w-[60%] rounded-xl m-5">
      <button
        onClick={() => setIsOpen(isOpen ? false : true)}
        className="flex justify-between items-center gap-6 w-full"
      >
        <h3 className="font-bold ">{question}</h3>
        {isOpen ? (
          <div className="text-blue-400  rounded-full flex items-center justify-center w-10 h-10  bg-blue-100 cursor-pointer">
            <IoIosArrowUp />
          </div>
        ) : (
          <div className="text-blue-500  rounded-full flex items-center justify-center w-10 h-10  bg-blue-100 cursor-pointer">
            <IoIosArrowDown />
          </div>
        )}
      </button>
      {isOpen && <p className=" text-gray-600">{answer}</p>}
    </div>
  );
}

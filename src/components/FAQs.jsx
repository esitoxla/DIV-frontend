import React, { useState } from "react";
import Tabs from "./Tabs";
import { faqData } from "../faqData";
import Accordion from "./Accordion";

export default function FAQs() {
  const [activeTab, setActiveTab] = useState("basics");

  return (
    <div className=" py-14 h-full bg-gray-100">
      <div className="text-center ">
        <h3 className="text-4xl font-bold pb-6">Frequently Asked Questions</h3>
        <Tabs activeTab={activeTab} changeTab={setActiveTab} />
      </div>

      <div>
        {faqData[activeTab].map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

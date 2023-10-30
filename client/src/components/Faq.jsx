import React from "react";
import faqs from "../constants/FaqList";

const Faq = () => {
  return (
    <div className="faqContainer min-h-[calc(85vh+1px)] bg-black px-32">
      <h1>Frequently Asked Questions</h1>
      <ul className="space-y-8 p-8">
        {faqs.map((faq, index) => (
          <li className="text-white" key={index}>
            <h2 className="text-2xl font-bold">{faq.Q}</h2>
            <p className="text-lg pl-8 py-4 text-gray-300">{faq.A}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;

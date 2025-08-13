"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the process for purchasing a plot at Sagana Ridge?",
      answer:
        "The process involves selecting a plot, signing a purchase agreement, making an initial deposit, submitting required documents, and completing the title transfer process.",
    },
    {
      question: "How long does the title transfer process take?",
      answer:
        "The title transfer process typically takes up to 30 days from the date of signing the title deed and submitting it to the land registry.",
    },
    {
      question: "What documents are required for the title transfer?",
      answer:
        "You will need to provide:\n- A copy of your ID or passport\n- KRA PIN certificate\n- Proof of deposit payment",
    },
    {
      question: "Are there any additional costs associated with the purchase?",
      answer:
        "Yes, in addition to the plot price, you may incur costs such as transfer fees, stamp duty, and registration fees. These will be outlined in your purchase agreement.",
    },
    {
      question: "Can I sell my plot after purchasing it?",
      answer:
        "Yes, you can sell your plot after you have received the title deed. However, you must ensure that all legal requirements are met during the sale process.",
    },
    {
      question: "What happens if I miss a payment on my plot?",
      answer:
        "If you miss a payment, please contact our management team immediately. Depending on the circumstances, we may offer a grace period or discuss alternative arrangements.",
    },
    {
      question: "Is there a management committee for the community?",
      answer:
        "Yes, Sagana Ridge has a dedicated management committee responsible for community security, maintenance, and organizing community activities.",
    },
    {
      question: "What are the zoning regulations for building on my plot?",
      answer:
        "Zoning regulations are in place to maintain the community’s aesthetic and safety. We provide guidelines on home styles and construction that must be followed.",
    },
    {
      question: "How can I ensure my ownership is secure?",
      answer:
        "Once you receive your title deed, your ownership is legally protected. It’s advisable to keep a copy of all related documents in a safe place.",
    },
    {
      question: "What if I have further questions about legalities?",
      answer:
        "For any additional questions or concerns regarding ownership and legalities, please contact our legal team or customer service for assistance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" p-6">
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800 hover:bg-accent-green"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-brand-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-primary" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is SEAL?",
    answer: "SEAL is an AI-powered platform that securely stores your personal information and autofills official documents like visa applications, housing contracts, and banking forms.",
  },
  {
    question: "Is SEAL secure?",
    answer: "Yes! Your data is securely stored on the blockchain, ensuring transparency and protection. We will never share your personal information. Ever.",
  },
  {
    question: "What types of documents can SEAL autofill?",
    answer: "SEAL autofills visa forms, rental agreements, bank applications, HR paperwork, and more—compatible with online forms, PDFs, and Word docs.",
  },
  {
    question: "Can businesses integrate SEAL into their platforms?",
    answer: "Yes! SEAL offers an API for businesses, universities, and institutions to streamline document handling and onboarding processes.",
  },
  {
    question: "Is SEAL free to use?",
    answer: "Yes! SEAL is free for individual users. Businesses can access premium features for advanced integrations and automation.",
  },
  {
    question: "How do I get started?",
    answer: 'Click "Get Early Access", create an account, and start autofilling your documents in seconds!',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            FAQs
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
            className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-900/50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-4xl ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
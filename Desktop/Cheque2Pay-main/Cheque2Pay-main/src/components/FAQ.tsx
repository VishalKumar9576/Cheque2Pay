import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
      question: "Is Cheque2Pay approved by RBI?",
      answer: "Yes, Cheque2Pay operates under full RBI compliance with necessary approvals for digital payment processing. We maintain all required licenses and regularly undergo compliance audits to ensure adherence to Indian banking regulations."
    },
    {
      question: "How fast are the transfers?",
      answer: "Transfers are processed instantly once verification is complete. UPI transfers happen in real-time, while NEFT transfers follow standard banking timelines. Most transactions are completed within 30 seconds of cheque validation."
    },
    {
      question: "What is the refund process?",
      answer: "Refunds are processed within 5-7 business days for legitimate requests. Our system maintains detailed transaction logs, and refunds can be initiated through your dashboard or by contacting our support team with proper documentation."
    },
    {
      question: "Can I cancel a cheque after submission?",
      answer: "Cheques can be cancelled before verification is complete. Once the verification process begins, cancellation is subject to banking regulations and may incur processing fees. We recommend reviewing all details before submission."
    },
    {
      question: "What security measures are in place?",
      answer: "We employ bank-grade encryption, multi-factor authentication, advanced signature verification, and real-time fraud detection. All data is stored in compliance with Indian data protection laws and international security standards."
    },
    {
      question: "Which banks are supported?",
      answer: "We support 25+ major Indian banks including SBI, HDFC, ICICI, Axis, Yes Bank, Kotak, and more. Our API integrations are constantly expanding to include regional and cooperative banks based on user demand."
    }
  ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-purple-600" />
                ) : (
                  <Plus className="h-5 w-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
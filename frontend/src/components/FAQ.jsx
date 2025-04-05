import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Is my payment/transaction secured when I’m donating?",
    answer: "Yes, all payments are encrypted and processed securely through trusted gateways.",
  },
  {
    question: "How are the Children verified?",
    answer: "Each child is verified through our partnered NGOs with proper documentation.",
  },
  {
    question: "How are my donations being utilized?",
    answer: "Your donations are directly allocated to the programs you choose (Education, Nutrition, etc).",
  },
  {
    question: "Whom should I contact if I have a question or problem in making an online donation?",
    answer: "Please reach out to our support team via the Contact Us page or email us at support@givinghands.org.",
  },
  {
    question: "What does donating online offer me?",
    answer: "Online donations offer transparency, ease, and instant receipts. You can track impact anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">FAQ</h2>
      <div className="max-w-4xl mx-auto bg-pink-600 rounded-3xl shadow-xl p-6 space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-white font-medium py-4 px-6 rounded-lg bg-pink-500 hover:bg-pink-400 transition"
            >
              {item.question}
              <ChevronDown
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="bg-white text-black p-4 rounded-lg mt-2 shadow-inner transition-all">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

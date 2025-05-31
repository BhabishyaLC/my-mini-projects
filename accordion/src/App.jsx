import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password'. Enter your email address and we'll send you a link to reset your password.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are securely processed.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us via email at support@example.com or through our live chat feature on the website.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.",
    },
  ];

  const handleToggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-2xl">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div class="space-y-4">
          {data.map((items, index) => (
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              key={index}
            >
              <button
                class="accordion-header w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span>{items.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                class={`accordion-content px-5 text-gray-600 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open === index
                    ? "max-h-[500px] pb-5 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                {open === index && <p>{items.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

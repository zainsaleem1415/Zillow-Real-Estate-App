import { useState } from "react";

const AgentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How to find a good real estate agent near me?",
      answer:
        "You can search for a real estate agent by name or narrow your search by location. View an agent's profile to compare, read reviews, and explore current listings and past sales. Our directory can help you find a top-rated real estate agent for buying, renting, or selling your home.",
    },
    {
      question: "How to pick a real estate agent?",
      answer:
        "Choose a real estate agent or broker with local expertise to guide you through the process of renting, buying, or selling your next home. Since each location's housing market is unique, a local real estate agent will understand your needs best.",
    },
    {
      question: "How to contact a real estate agent?",
      answer:
        "You can contact a real estate agent directly from their profile. Use the contact box to type a message to the agent and then select “Send message”. The real estate agent or broker you contacted will then reach out to connect with you.",
    },
    {
      question: "What home seller mistakes should I avoid?",
      answer:
        "Avoid overpricing your home, neglecting repairs, using poor-quality photos, and being inflexible with showings. A good agent will guide you through these mistakes.",
    },
    {
      question: "How do I leave a review for a real estate agent?",
      answer:
        "Search for the agent by name using the directory search bar. Once on their profile, you can rate the real estate agent and write a review. You can also read reviews from others.",
    },
    {
      question: "What is the difference between an agent and a broker?",
      answer:
        "Both an agent and a real estate broker are licensed to help you buy, rent, or sell a home. In some states, the words are used interchangeably. In others, a broker may have a higher level of licensing, enabling them to oversee and guide agents.",
    },
    {
      question: "What is a pocket listing?",
      answer:
        "A pocket listing is a property that’s not listed on the MLS and is instead marketed privately. This can create exclusivity but limits exposure to buyers.",
    },
  ];

  return (
    <div className="bg-gray-700 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl mb-10 font-bold tracking-wide text-center">
          Frequently Asked Questions
        </h1>
        <div className="divide-y divide-gray-600">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className={`w-full flex justify-between items-center py-4 px-4 text-left font-medium transition-colors ${
                  activeIndex === index
                    ? "bg-gray-700"
                    : "bg-gray-700 hover:opacity-90"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base">{faq.question}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden px-4 bg-gray-700 text-base ${
                  activeIndex === index ? "max-h-[500px] py-3" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentFAQ;

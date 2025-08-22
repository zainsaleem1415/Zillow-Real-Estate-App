import { useState } from "react";

const HomeSellingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When selling my house, where should I begin?",
      answer:
        "Start your home selling process by gathering information and considering your options. After choosing a selling path that works best for you, take the first step; contact an iBuyer, a real estate agent or begin home prep.",
    },
    {
      question: "Where are cash offers available?",
      answer: (
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800">Midwest</h4>
            <p className="text-gray-600 text-sm">
              Detroit, MI; Indianapolis, IN; Kansas City, MO; Minneapolis-St.
              Paul, MN; Saint Louis, MO
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Northeast</h4>
            <p className="text-gray-600 text-sm">
              Boston, MA; Long Island and sections of the Lower Hudson Valley,
              NY; North and Central New Jersey, NJ; Washington, DC
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Southeast</h4>
            <p className="text-gray-600 text-sm">
              Atlanta, GA; Birmingham, AL; Charlotte, NC; Cincinnati, OH;
              Cleveland, OH; Columbia, SC; Columbus, OH; Daytona Beach, FL;
              Durham, NC; Fort Myers, FL; Gainesville, FL; Greenville, SC;
              Jacksonville, FL; Knoxville-Morristown, TN; Lakeland, FL; Miami,
              FL; Naples, FL; Nashville, TN; Orlando, FL; Raleigh, NC; Richmond,
              VA; Sarasota, FL; Tampa, FL
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Southwest</h4>
            <p className="text-gray-600 text-sm">
              Albuquerque, NM; Austin, TX; Dallas-Fort Worth, TX; Houston, TX;
              Killeen, TX; Las Vegas, NV; Oklahoma, OK; Phoenix, AZ; San
              Antonio, TX; Tucson, AZ
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">West</h4>
            <p className="text-gray-600 text-sm">
              Boulder, CO; Colorado Springs, CO; Denver, CO; Fort Collins, CO;
              Los Angeles, CA; Northern Colorado, CO; Portland, OR; Riverside,
              CA; Sacramento, CA; Salt Lake City, UT; San Diego, CA; San
              Francisco Bay Area, CA
            </p>
          </div>
        </div>
      ),
    },
    {
      question:
        "How do Zillow partner agents help sell homes faster and for more?",
      answer:
        "In select markets, Zillow partner agents offer Showcase, a premium listing experience. Showcase listings include increased exposure on Zillow, marketing to interested buyers, and a virtual tour and interactive floor plan – all designed to help you sell your home faster and for more. Showcase listings are more likely to have an offer accepted in 14 days and sell for 2% more – that's $9K more on a home sold at the average home sales price in the US.",
    },
    {
      question:
        "What are the benefits of having your home listed on public portals such as Zillow vs. on a private listing network?",
      answer: (
        <>
          <p className="mb-3">
            When you list a home publicly on an MLS, the MLS will syndicate your
            listing to public sites like Zillow or Redfin, providing maximum
            visibility and fairness for all. This gives all buyers visibility to
            your listing and helps you reach the highest sale price.
          </p>
          <p className="mb-3">
            A multi-state study by BrightMLS and Drexel University from 2023
            found that homes listed on the MLS sold for 17.5% more than off-MLS
            listings, representing more than $53k for the typical seller. These
            homes also sold faster. Therefore, listings with maximum exposure
            get the maximum price.
          </p>
          <p>
            With private listings (also known as pocket listings, hidden
            listings, exclusive listings and off-market listings), sellers miss
            the opportunity to have their property shown to as many buyers as
            possible. When you list with an agent, your property must be
            included in an MLS in order to show up on Zillow, which has one of
            the largest audiences of home buyers shopping on any real estate
            platform.
          </p>
        </>
      ),
    },
    {
      question: "How long does it take to sell a house?",
      answer:
        "On average, homes in the U.S. spend about one month on the market before going under contract, and another month or more to close. In 2020, the average time to sell a home was 55-70 days from list to close.",
    },
    {
      question: "What home seller mistakes should I avoid?",
      answer:
        "Common mistakes when selling a house include overpricing, poor sale timing, incomplete home repairs, unprofessional marketing photography and forgetting to factor in all of the closing costs as a seller. Learn more about your likely home sale net proceeds.",
    },
    {
      question: "What is an MLS?",
      answer:
        "A Multiple Listings Service (MLS) is a local database of homes for sale. After a home seller works with an agent to list a home to an MLS, the MLS will then syndicate listings to public sites like Zillow or Redfin, giving all buyers access to them. By definition, pocket listings don't appear on the MLS — they're accessible only through the agent or brokerage representing the seller.",
    },
    {
      question: "What is the Clear Cooperation Policy?",
      answer:
        "The Clear Cooperation Policy (CCP) is a policy from the National Association of REALTORS® (NAR) designed to promote the sharing of real estate information and ensure that publicly advertised properties are available on a Multiple Listing Service (MLS) for all agents and buyers to see. Learn how CCP impacts sellers.",
    },
    {
      question: "What is a pocket listing?",
      answer:
        "A pocket listing is a property that is sold privately, without being listed on an MLS. These listings are also known as private listings, hidden listings, exclusive listings and off-market listings. Learn more about pocket listings.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl mb-4 py-10 font-black text-gray-800 text-center">
        Frequently asked questions
      </h1>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className={`w-full flex justify-between items-center py-4 text-left font-medium transition-colors ${
                activeIndex === index
                  ? "bg-gray-50"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base text-gray-800">{faq.question}</span>
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
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-[500px] py-2 pr-2" : "max-h-0"
              }`}
            >
              <div className="pb-1 text-gray-600 text-sm">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSellingFAQ;

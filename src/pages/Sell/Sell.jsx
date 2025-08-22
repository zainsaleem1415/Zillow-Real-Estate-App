import React from "react";
import FAQComponent from "./FAQComponent";
import Footer from "../../components/Footer/Footer";
import Footer5 from "../../components/Footer/Footer5";
const Sell = () => {
  return (
    <div>
      <div className="flex lg:h-[74vh] flex-col lg:flex-row px-6 lg:px-28 py-10 lg:py-14 items-center justify-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-[47rem] flex flex-col justify-between">
          <h1 className="font-black pt-6 lg:pt-10 leading-tight text-3xl lg:text-[40px] text-center lg:text-left">
            Sell your home with confidence
          </h1>
          <p className="py-4 lg:py-6 text-lg text-center lg:text-left">
            We give you multiple options to sell your home with the flexibility
            to choose what works best for your unique situation, timeline and
            goals
          </p>
          <button className=" w-full sm:w-64 py-3 lg:py-4 mt-4 bg-blue-700 hover:bg-blue-800 transition-colors rounded-xl text-white">
            Explore your options
          </button>
        </div>

        {/* Image Container */}
        <div className="w-full max-w-[100%] h-auto">
          <img
            className="w-full h-auto rounded-lg shadow-xl object-contain"
            src="https://delivery.digitalassets.zillowgroup.com/api/public/content/HeroImage2x_CMS_Large.png?v=faa40f41"
            alt="Happy homeowners with real estate agent"
            loading="lazy"
          />
        </div>
      </div>
      {/* Sell with Zillow Partner Agent - Responsive Version */}
      <div className="min-h-[94vh] bg-green-900 py-8 md:py-12 flex flex-col items-center px-6 md:px-24">
        <h1 className="font-black text-white py-6 md:py-10 leading-8 md:leading-10 text-[28px] md:text-[36px] text-center">
          Sell with a{" "}
          <span className="text-green-300">Zillow partner agent</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-6xl">
          {/* Zillow Partner left Container */}
          <div className="rounded-xl flex flex-col items-center bg-white p-4 md:p-6 gap-2 md:gap-3 w-full">
            <img
              className="w-32 md:w-48"
              src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Sell-for-more-Illustration2x_CMS_Large.png?v=9dc1d40b"
              alt=""
            />
            <h2 className="font-bold text-lg md:text-xl text-center">
              Sell for more with Showcase
            </h2>
            <p className="text-gray-800 text-center text-sm md:text-base">
              Select partner agents offer{" "}
              <span className="text-blue-500">Showcase</span> — a premium
              listing experience with 3D tours and interactive floor plans — at
              no extra
            </p>
            <p className="text-gray-800 text-sm md:text-base text-center">
              cost. Showcase listings sell for $7K more on average.1
            </p>
          </div>

          {/* Zillow Partner right Container */}
          <div className="rounded-xl bg-white p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 w-full">
            <img
              className="w-32 md:w-48"
              src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Maximize-your-homeIllustration2x_CMS_Large.png?v=6a1f4b96"
              alt=""
            />
            <h2 className="font-bold text-lg md:text-xl text-center">
              Maximize your home's visibility
            </h2>
            <p className="text-gray-800 text-center text-sm md:text-base">
              Zillow helps you{" "}
              <span className="text-blue-600">sell your home</span> with partner
              agents to reach the largest audience of buyers through public
              listings.
            </p>
          </div>
        </div>

        <p className="text-center py-6 md:py-10 text-white text-sm md:text-base w-full max-w-[40rem] px-4">
          Answer a few questions to connect with a Zillow partner agent who
          offers Showcase or explore other selling options — all in 3 minutes
          with no commitment.
        </p>

        <button className="text-blue-700 px-6 md:px-8 py-2 md:py-3 border border-blue-700 rounded-lg bg-white text-sm md:text-base">
          Get Started
        </button>
      </div>

      {/* Explore more selling options */}
      <div className="flex items-center flex-col lg:px-24 lg:py-14 ">
        <h1 className="text-4xl font-black ">Explore more selling options</h1>
        <p className=" text-gray-600 py-4">
          Sell your home your way. Choose the path that fits your needs
        </p>
        {/* First Container */}
        <div className="flex flex-col  lg:flex-row my-4 lg:my-12 h-auto lg:h-[500px] rounded-2xl lg:rounded-2xl overflow-hidden border border-gray-200  w-full lg:w-[1100px]  ">
          {/* Left Content */}
          <div className="bg-blue-900 text-white p-5 lg:p-14 flex flex-col justify-around w-full lg:w-[65%] rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl ">
            <div>
              <h2 className="font-bold text-2xl lg:text-4xl mb-6">
                Get a <span className="text-blue-300">cash offer</span>
              </h2>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✓</span>
                  <span className="text-base lg:text-lg">
                    Get an all cash offer in select markets when you sell
                    directly to our trusted partner, Opendoor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✓</span>
                  <span className="text-base lg:text-lg">
                    Sell your home as-is and avoid the hassle of showings and
                    repairs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✓</span>
                  <span className="text-base lg:text-lg">
                    Sell your home on your timeline and choose your closing day
                  </span>
                </li>
              </ul>
              <p className="text-base lg:text-lg mb-6">
                Take 3 minutes to check your eligibility. No commitment needed.
              </p>
              <button className="text-blue-900 bg-white px-6 py-3 font-bold w-full lg:w-48 rounded-lg hover:bg-blue-100 transition-colors text-base lg:text-lg">
                Get a cash offer
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl overflow-hidden">
            <img
              className="w-full h-[300px] lg:h-full object-cover"
              src="/zillowpic3.png"
              alt="Modern home for sale"
            />
          </div>
        </div>
        {/* Second Container */}
        <div className="flex flex-col lg:flex-row px-4 my-10">
          {/* Content Section - Top on mobile, Right on desktop */}
          <div className="bg-blue-900 text-white flex flex-col justify-between p-6 lg:p-10 rounded-t-2xl lg:rounded-tr-2xl lg:rounded-l-none rounded-b-none lg:rounded-b-2xl order-1 lg:order-2 lg:w-[70%]">
            <div>
              <h1 className="font-extrabold text-2xl lg:text-4xl mb-4 lg:mb-6">
                Find your <span className="text-blue-300">own agent</span>
              </h1>

              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                <p className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-lg mt-0.5">✓</span>
                  <span>
                    Explore agents by local market expertise, specialties and
                    verified reviews
                  </span>
                </p>
                <p className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-lg mt-0.5">✓</span>
                  <span>
                    Already have an agent? See how Zillow can help maximize your
                    sale
                  </span>
                </p>
              </div>
            </div>

            <button className="text-blue-700 bg-white py-4 px-4 rounded-lg w-full lg:w-52 font-bold hover:bg-blue-50 transition-colors">
              Find agents near you
            </button>
          </div>

          {/* Image Section - Bottom on mobile, Left on desktop */}
          <div className="w-full lg:w-[55%] rounded-b-2xl rounded-t-none lg:rounded-tl-2xl lg:rounded-br-none overflow-hidden order-2 lg:order-1">
            <img
              className="w-full h-[300px] lg:h-[360px] object-cover object-center"
              src="zillowpic4.png"
              alt="Professional real estate agent"
              loading="lazy"
            />
          </div>
        </div>
        {/* Third Container */}
        <div className="flex flex-col lg:flex-row my-10">
          {/* Content Section - First on mobile, left on desktop */}
          <div className="order-1 lg:order-1 w-full lg:w-[60%] bg-blue-900 text-white flex flex-col p-6 lg:p-14 lg:py-20 rounded-t-2xl lg:rounded-tl-2xl lg:rounded-r-none rounded-b-none lg:rounded-bl-2xl">
            <div>
              <h1 className="font-extrabold text-2xl lg:text-4xl mb-4 lg:mb-6">
                Sell your home <span className="text-blue-300">yourself</span>
              </h1>

              <div className="space-y-3 lg:space-y-3 mb-6 lg:mb-8">
                <p className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-lg mt-0.5">✓</span>
                  <span>
                    Reach more potential buyers with a For Sale By Owner
                    listing.
                  </span>
                </p>
                <p className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-lg mt-0.5">✓</span>
                  <span>
                    Manage everything, from home prep to negotiations.
                  </span>
                </p>
                <p className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-lg mt-0.5">✓</span>
                  <span>Keep 100% of the proceeds.</span>
                </p>
              </div>
            </div>

            <button className="text-blue-700 bg-white py-3 px-1 rounded-lg w-full lg:w-52 font-bold hover:bg-blue-50 transition-colors">
              List your home on Zillow
            </button>
          </div>

          {/* Image Section - Second on mobile, right on desktop */}
          <div className="order-2 lg:order-2 w-full lg:w-[40%] rounded-b-2xl lg:rounded-bl-none lg:rounded-tr-2xl overflow-hidden">
            <img
              className="w-full h-[200px] lg:h-[420px] object-cover object-center"
              src="/zillowpic5.png"
              alt="Professional real estate agent"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Resources For Successful Sale - Responsive Version */}
      <div className="flex flex-col py-6 md:py-10 bg-gray-100 px-4 md:px-14 lg:px-56">
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl md:text-left text-center">
          Go-to resources for a successful sale
        </h1>
        <p className="py-3 md:py-5 text-gray-700 text-center md:text-left text-sm md:text-base">
          Get practical guides and strategies for every step of your selling
          process.
        </p>

        {/* Cards Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card-1 */}
          <div className="rounded-2xl md:rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div>
              <img
                className="w-full h-auto"
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module6_14-Tips-Article-Image2x_CMS_Medium_Large.png?v=1c387c71"
                alt="Tips for selling home"
              />
            </div>
            <div className="flex flex-col p-4 md:p-6 lg:p-7 bg-white">
              <button className="w-20 md:w-24 bg-blue-200 rounded-xl md:rounded-2xl text-xs md:text-sm py-1">
                8 min read
              </button>
              <h2 className="font-medium py-2 text-sm md:text-base">
                14 tips for selling your home fast and for more money
              </h2>
              <a
                className="text-blue-800 font-medium text-sm md:text-base"
                href="#"
              >
                Read article
              </a>
            </div>
          </div>

          {/* Card-2 */}
          <div className="bg-white rounded-xl md:rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div>
              <img
                className="w-full h-auto"
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module6_Choose-Agent-Image2x_CMS_Medium_Large.png?v=941acad3"
                alt="Choosing real estate agent"
              />
            </div>
            <div className="flex flex-col p-4 md:p-6 lg:p-7">
              <button className="w-20 md:w-24 bg-blue-200 rounded-xl md:rounded-2xl text-xs md:text-sm py-1">
                8 min read
              </button>
              <h2 className="font-medium py-2 text-sm md:text-base">
                How to choose the right real estate agent
              </h2>
              <a
                className="text-blue-800 font-medium text-sm md:text-base"
                href="#"
              >
                Read article
              </a>
            </div>
          </div>

          {/* Card-3 */}
          <div className="rounded-2xl md:rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div>
              <img
                className="w-full h-auto"
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module6_14-Tips-Article-Image2x_CMS_Medium_Large.png?v=1c387c71"
                alt="Steps to selling house"
              />
            </div>
            <div className="flex flex-col p-4 md:p-6 lg:p-7 bg-white">
              <button className="w-20 md:w-24 bg-blue-200 rounded-xl md:rounded-2xl text-xs md:text-sm py-1">
                15 min read
              </button>
              <h2 className="font-medium py-2 md:py-4 text-sm md:text-base">
                Steps to selling a house
              </h2>
              <a
                className="text-blue-800 font-medium text-sm md:text-base"
                href="#"
              >
                Read article
              </a>
            </div>
          </div>

          {/* Card-4 */}
          <div className="bg-white rounded-2xl md:rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div>
              <img
                className="w-full h-auto"
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module6_Choose-Agent-Image2x_CMS_Medium_Large.png?v=941acad3"
                alt="Best time to sell house"
              />
            </div>
            <div className="flex flex-col p-4 md:p-6 lg:p-7">
              <button className="w-20 md:w-24 bg-blue-200 rounded-xl md:rounded-2xl text-xs md:text-sm py-1">
                7 min read
              </button>
              <h2 className="font-medium py-2 md:py-4 text-sm md:text-base">
                What is the best time to sell a house?
              </h2>
              <a
                className="text-blue-800 font-medium text-sm md:text-base"
                href="#"
              >
                Read article
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-600 my-6  text-xs md:text-sm">
          As you take the steps to sell your home, learn what to expect with our{" "}
          <span className="text-blue-700 font-bold underline">
            Sellers Guide.
          </span>
        </p>
      </div>
      {/* Smart Selling Plan */}
      <div className="py-8 md:py-12 px-4 md:px-32 bg-green-900">
        <div className="bg-white flex flex-col md:flex-row px-6 md:px-28 py-8 md:py-10 gap-6 md:gap-10 rounded-2xl md:h-60">
          <div className="mx-auto md:mx-0 md:my-8 w-16 md:w-20">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2025/05/bluechecklist.png"
              alt="Checklist icon"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center md:justify-around gap-4 md:gap-0">
            <h1 className="font-extrabold text-2xl md:text-4xl text-center md:text-left">
              Build a smart selling plan
            </h1>
            <p className="text-gray-700 text-sm md:text-base text-center md:text-left md:max-w-[43rem]">
              Talk to your agent about their marketing approach — especially
              online — to ensure you're getting the best possible price for your
              home
            </p>
            <button className="mx-auto md:mx-0 bg-white  text-blue-900 font-semibold  rounded-lg text-sm md:text-base w-full text-left hover:bg-gray-50 transition-colors">
              Create a selling plan
            </button>
          </div>
        </div>
      </div>

      <FAQComponent />
      {/* Find your perfect selling path */}
      <div className="py-6 md:py-10 px-4 md:px-32">
        <div className="border border-gray-300 flex flex-col md:flex-row p-6 md:p-10 rounded-xl">
          {/* Image moved to top for mobile - first in DOM order */}
          <div className="md:hidden w-full mb-6">
            <img
              className="w-full h-auto"
              src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module9_Sell-Home-Illustration2x_CMS_Medium_Large.png?v=5a5b1859"
              alt="Selling options illustration"
            />
          </div>

          <div className="flex flex-col justify-around gap-4 md:gap-0 md:max-w-[34rem]">
            <h1 className="font-extrabold text-xl md:text-3xl">
              Find your perfect selling path in minutes
            </h1>
            <p className="text-gray-800 text-sm md:text-base">
              Answer a few simple questions to determine whether selling with a
              partner agent or getting a cash offer is best for you. No
              commitment required.
            </p>
            <button className="bg-blue-600 w-full md:w-44 text-white rounded-lg py-3 text-sm md:text-base hover:bg-blue-700 transition-colors">
              Explore selling options
            </button>
          </div>

          {/* Image for desktop - second in DOM order but visually on right */}
          <div className="hidden md:block md:w-[28rem] md:pl-10">
            <img
              className="w-full h-auto"
              src="https://delivery.digitalassets.zillowgroup.com/api/public/content/Module9_Sell-Home-Illustration2x_CMS_Medium_Large.png?v=5a5b1859"
              alt="Selling options illustration"
            />
          </div>
        </div>

        <p className="text-gray-500 text-xs md:text-sm ">
          Compared to similar, nearby non-Showcase listings. All claims are
          based on data available here.
        </p>
      </div>
      <hr className="mx-28" />
      <div className="hidden sm:block py-5">
        <Footer5 />
      </div>

      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Sell;

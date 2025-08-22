import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import AgentFAQ from "./AgentFAQ";
import Footer from "../../components/Footer/Footer";
import Footer5 from "../../components/Footer/Footer5";
const Findagent = () => {
  return (
    <div>
      {/* Top Links */}
      <div className="flex flex-wrap text-gray-800 font-light gap-5 px-4 sm:px-24 py-4 text-sm sm:text-[15px] justify-center sm:justify-start">
        <a className="hover:underline" href="#">
          Agents
        </a>
        <a className="hover:underline" href="#">
          Home Improvement
        </a>
        <a className="hover:underline" href="#">
          Property Managers
        </a>
        <a className="hover:underline" href="#">
          Builders
        </a>
        <a className="hover:underline" href="#">
          Inspectors
        </a>
        <a className="hover:underline" href="#">
          Photographers
        </a>
        <a className="hover:underline" href="#">
          Other
        </a>
      </div>
      {/* Main Section */}
      <div
        className="gap-10 flex flex-col items-center w-full sm:h-60 md:h-[27rem] bg-no-repeat bg-cover bg-center py-16 px-4"
        style={{
          backgroundImage:
            "url('https://delivery.digitalassets.zillowgroup.com/api/public/content/SZ_Agent_BoZSepLaunchEmails_Q323_Secondary_Photo_2x_CMS_Full.webp')",
        }}
      >
        {/* Headings */}
        <div className="space-y-2 text-center">
          <h1 className="text-white font-bold text-3xl sm:text-5xl">
            A great agent makes
          </h1>
          <h1 className="text-white font-bold text-3xl sm:text-5xl">
            all the difference
          </h1>
        </div>

        {/* Find Agent Box */}
        <div className="bg-white w-full max-w-2xl px-4 py-4 rounded-lg gap-4 flex flex-col">
          <h2 className="font-semibold text-center sm:text-left">
            Find a real estate agent
          </h2>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* Location/Name buttons */}
            <div className="flex gap-2">
              <button className="px-4 lg:py-3 py-2 border w-full border-gray-400 rounded-sm text-sm">
                Location
              </button>
              <button className="px-4 lg:py-3 py-2 border w-full border-gray-400 rounded-sm text-sm">
                Name
              </button>
            </div>

            {/* Input with Icons */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <FaMapMarkerAlt />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="City, neighborhood, or Zip Code"
                className="w-full py-2 lg:py-3 pl-10 pr-10 border border-gray-400 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Agents Details */}
      <div className="flex flex-col items-center border border-black px-4 py-12">
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide text-gray-700">
            Real Estate Agents in Chicago, IL
          </h2>
          <p className="w-full sm:w-[36rem] lg:w-[42rem] text-sm sm:text-base font-light text-gray-600 py-3">
            With over a million agents from all the top brokerages, a local
            agent knows your market and can guide you through the process from
            start to finish.
          </p>
        </div>

        {/* Agents Card Container */}
        <div className="flex flex-wrap gap-4 justify-center py-5">
          {/* Agent 1 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/e1c98c6600e18861f6924f92bf3a5518-h_l.jpg"
                alt="Matt Laricy"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Matt Laricy
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                Americorp Real Estate
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$13K - $3.8M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">529</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">5236</span> team sales in
                Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1834)
              </p>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/32a0eacaaa51a4efb4add0f851b5b069-h_l.jpg"
                alt="Patrick Shino"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Patrick Shino
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                FULTON GRACE REALTY
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$20K - $2.7M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">108</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">522</span> team sales in Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1168)
              </p>
            </div>
          </div>

          {/* Agent 3 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/8ea1d66755b7c6a18d845b0503645087-h_l.jpg"
                alt="Sam Shaffer"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Sam Shaffer
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                Chicago Properties
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$25K - $4.9M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">121</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">1920</span> team sales in
                Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1149)
              </p>
            </div>
          </div>

          {/* Agent 4 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/96739c3af5de7ea5571dd80313d64eaa-h_l.jpg"
                alt="Vesta Preferred"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Vesta Preferred
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                Vesta Preferred, LLC
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$70K - $2.8M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">560</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">2534</span> team sales in
                Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1049)
              </p>
            </div>
          </div>

          {/* Agent 5 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/e1c98c6600e18861f6924f92bf3a5518-h_l.jpg"
                alt="Matt Laricy"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Matt Laricy
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                Americorp Real Estate
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$13K - $3.8M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">529</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">5236</span> team sales in
                Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1834)
              </p>
            </div>
          </div>

          {/* Agent 6 */}
          <div className="border border-gray-300 shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-[6px] flex flex-col md:flex-row px-5 py-5 gap-6 bg-white max-w-xl w-full">
            <div className="rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
                src="https://photos.zillowstatic.com/fp/6a55a194295acce5672726239e0479c8-h_l.jpg"
                alt="Bari Levine"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 text-center md:text-left">
              <h2 className="font-semibold text-2xl leading-snug">
                Bari Levine
              </h2>
              <p className="pb-3 font-light text-gray-700 leading-snug">
                Americorp Real Estate
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">$15K - $2.8M</span> team price
                range
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">529</span> team sales last 12
                months
              </p>
              <p className="font-light text-gray-600 text-[15px]">
                <span className="font-semibold">5236</span> team sales in
                Chicago
              </p>
            </div>
            <div className="flex justify-center md:items-start md:ml-auto pt-4 md:pt-1">
              <p className="text-sm text-gray-700 font-medium">
                5.0 <span className="text-yellow-500">⭐</span> (1174)
              </p>
            </div>
          </div>
        </div>

        <button className="text-blue-700 border border-blue-800  px-3 py-2 rounded mt-6">
          View more
        </button>
      </div>

      {/* Get help finding an Agent */}
      <div>
        <div
          className="w-full h-80 sm:h-60 md:h-[23rem] bg-no-repeat bg-cover bg-center px-4 sm:px-8 md:px-32 py-10 sm:py-16 md:py-24 flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://delivery.digitalassets.zillowgroup.com/api/public/content/ZG_Brand_CHI_0822_LvlUp_BackExt_Tour_0291_1280x4502x_CMS_Full.webp')",
          }}
        >
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
            Get help finding an agent
          </h2>
          <p className="text-white py-2 text-sm sm:text-base md:text-lg">
            We'll pair you with a Zillow Premier Agent who has the inside scoop
            on your market.
          </p>
          <button className="bg-white mt-4 sm:mt-6 hover:text-blue-800 text-blue-600 px-4 py-[6px] w-64 rounded">
            Connect with a local agent
          </button>
        </div>
      </div>

      {/* FAQ Part */}
      <AgentFAQ />
      {/* Are you a real estate agent? */}
      <div className="px-4 sm:px-8 md:px-24 py-8 sm:py-10 md:py-12">
        <h2 className="font-semibold text-xl sm:text-2xl pb-3 sm:pb-4">
          Are you a real estate agent?
        </h2>
        <p className="text-gray-600 font-light text-sm sm:text-[15px] leading-relaxed">
          Check out the extensive resources you can find in our{" "}
          <span className="text-blue-600 hover:text-black underline">
            Premier Agent® Resource Center
          </span>
          , covering everything from{" "}
          <span className="text-blue-600 hover:text-black underline">
            business plan templates
          </span>{" "}
          to complete guides on{" "}
          <span className="underline text-blue-600 hover:text-black">
            real estate marketing.
          </span>{" "}
          Not a Premier Agent yet? Find out how{" "}
          <span className="underline text-blue-600 hover:text-black">
            real estate advertising
          </span>{" "}
          on Zillow and Trulia can help you get more leads.
        </p>
      </div>

      {/* Links Container */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 bg-gray-100 px-4 py-6 ">
        {/* Column 1 */}
        <div className="flex flex-col text-gray-800 font-light gap-3 text-sm sm:text-[13px]">
          <p className="font-semibold">Real Estate Agents</p>
          <a className="hover:underline" href="#">
            Chicago Real Estate Agents
          </a>
          <a className="hover:underline" href="#">
            Cicero Real Estate Agents
          </a>
          <a className="hover:underline" href="#">
            Stickney Real Estate Agents
          </a>
          <a className="hover:underline" href="#">
            Berwyn Real Estate Agents
          </a>
          <a className="hover:underline" href="#">
            Forestview Real Estate Agents
          </a>
          <p className="text-blue-900 font-semibold text-[15px]">
            <span className="text-lg mr-1">+ </span> Show more
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col text-gray-800 font-light gap-3 text-sm sm:text-[13px]">
          <p className="font-semibold">Mortgage Lenders</p>
          <a className="hover:underline" href="#">
            Chicago Mortgage Lenders
          </a>
          <a className="hover:underline" href="#">
            Cicero Mortgage Lenders
          </a>
          <a className="hover:underline" href="#">
            Stickney Mortgage Lenders
          </a>
          <a className="hover:underline" href="#">
            Berwyn Mortgage Lenders
          </a>
          <a className="hover:underline" href="#">
            Forestview Mortgage Lenders
          </a>
          <p className="text-blue-900 font-semibold text-[15px]">
            <span className="text-lg mr-1">+ </span> Show more
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col text-gray-800 font-light gap-3 text-sm sm:text-[13px]">
          <p className="font-semibold">Home Improvement Pros</p>
          <a className="hover:underline" href="#">
            Chicago Home Improvement Pros
          </a>
          <a className="hover:underline" href="#">
            Cicero Home Improvement Pros
          </a>
          <a className="hover:underline" href="#">
            Stickney Home Improvement Pros
          </a>
          <a className="hover:underline" href="#">
            Berwyn Home Improvement Pros
          </a>
          <a className="hover:underline" href="#">
            Forestview Home Improvement Pros
          </a>
          <p className="text-blue-900 font-semibold text-[15px]">
            <span className="text-lg mr-1">+ </span> Show more
          </p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col text-gray-800 font-light gap-3 text-sm sm:text-[13px] ">
          <p className="font-semibold">Property Managers</p>
          <a className="hover:underline" href="#">
            Chicago Property Managers
          </a>
          <a className="hover:underline" href="#">
            Cicero Property Managers
          </a>
          <a className="hover:underline" href="#">
            Stickney Property Managers
          </a>
          <a className="hover:underline" href="#">
            Berwyn Property Managers
          </a>
          <a className="hover:underline" href="#">
            Forestview Property Managers
          </a>
          <p className="text-blue-900 font-semibold text-[15px]">
            <span className="text-lg mr-1">+ </span> Show more
          </p>
        </div>
      </div>
      <div className="hidden sm:block py-5">
        <Footer5 />
      </div>

      <div className="block md:hidden">
        <Footer />
      </div>

      <div>
        <img src="./zillowpic2.png" alt="" />
      </div>
    </div>
  );
};

export default Findagent;

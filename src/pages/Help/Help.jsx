import React from "react";

const Help = () => {
  return (
    <div>
      {/* Hero Section with Search */}
      <div
        className="w-full h-40 sm:h-60 md:h-72 bg-no-repeat bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg5.png')" }}
      >
        <div className="relative w-[90%] max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full text-xs pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-12 pb-4 px-4 sm:px-10 lg:px-28">
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Landlords
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Agents
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Leaders
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Zillow Home Loans
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Renters
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Homebuyers
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Homeowners
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Home Sellers
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Privacy
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-10 lg:px-28 pb-8 sm:pt-3">
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Mobile Apps
        </button>
        <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Zillow Canada
        </button>
      </div>

      {/* Divider */}
      <hr className="mx-4 sm:mx-10 lg:mx-28 lg:my-12 " />

      <hr className="   lg:mt-24" />

      {/* Footer */}
      <div className="text-sm flex  sm:flex-row justify-between gap-2 sm:gap-0 px-5 sm:px-10 lg:px-28 py-8">
        <button className="text-gray-500 hover:underline">
          Zillow Help Center
        </button>
        <button className="text-blue-500 hover:underline">
          Privacy Policy
        </button>
        <button className="hover:underline">English (US)</button>
      </div>
    </div>
  );
};

export default Help;

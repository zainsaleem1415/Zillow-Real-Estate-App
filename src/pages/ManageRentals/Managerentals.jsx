import React from "react";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"; // FaXTwitter is for the new "X" logo

const Managerentals = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md border border-gray-200">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="w-40">
              <img
                src="https://nodes3cdn.hotpads.com/zrm-marketing-web/10901/_next/static/media/rentals-logo.7408c40b.svg"
                alt="Logo"
                className="w-full"
              />
            </div>

            {/* Hamburger (Mobile) */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                ☰
              </button>
            </div>

            {/* Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8 font-light">
              {/* Dropdown 1 */}
              <div className="relative group">
                <p className="text-gray-700 cursor-pointer">
                  Rental manager <span className="text-xs">▼</span>
                </p>
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md text-sm text-blue-500 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Price my rental
                  </li>
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Listing
                  </li>
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Applications
                  </li>
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Leases
                  </li>
                </ul>
              </div>

              {/* Dropdown 2 */}
              <div className="relative group">
                <p className="text-gray-700 cursor-pointer">
                  Apartment advertising <span className="text-xs">▼</span>
                </p>
                <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-md text-sm text-blue-500 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Subscription based ads
                  </li>
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Pay-per-lease ads
                  </li>
                  <li className="hover:bg-blue-50 hover:underline p-2">
                    Syndicate listings
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Resources
              </p>
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex gap-4 items-center">
              <button className="text-blue-700 font-semibold">
                Contact sales
              </button>
              <button className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-900">
                Post your listing
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden flex flex-col gap-4 py-4 font-light">
              <div>
                <p className="text-gray-700">Rental manager ▼</p>
                <ul className="text-sm text-blue-500 pl-4">
                  <li className="hover:underline">Price my rental</li>
                  <li className="hover:underline">Listing</li>
                  <li className="hover:underline">Applications</li>
                  <li className="hover:underline">Leases</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700">Apartment advertising ▼</p>
                <ul className="text-sm text-blue-500 pl-4">
                  <li className="hover:underline">Subscription based ads</li>
                  <li className="hover:underline">Pay-per-lease ads</li>
                  <li className="hover:underline">Syndicate listings</li>
                </ul>
              </div>
              <p className="text-gray-700">Resources</p>
              <div className="flex flex-col gap-2">
                <button className="text-blue-700 font-semibold text-left">
                  Contact sales
                </button>
                <button className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-900">
                  Post your listing
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Main */}
      <div
        className=" w-full  sm:h-60 md:h-[30rem] bg-no-repeat bg-cover bg-center py-[9px] px-[4.5rem] hidden sm:block"
        style={{ backgroundImage: "url('/bg7.png')" }}
      >
        <div className=" h-80  w-full">
          <h1 className="hidden">
            Level up your landlording simply and confidently
          </h1>
          <p className="hidden">
            Take the extra legwork out of running your rental. From leases and
            payments to maintenance and move-out, Rental Manager has the tools
            to help you get more done.
          </p>
        </div>
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-[3.2rem] rounded-lg">
          View your properties
        </button> */}
      </div>
      {/* Rental Manager Cards Container */}
      <div className="py-16 bg-blue-950">
        <div className="bg-blue-950 px-4 md:px-10 lg:px-20 flex flex-col justify-center lg:flex-row gap-7">
          {/* Card-1 */}
          <div className="w-full lg:w-[23rem] flex flex-col gap-5 text-white">
            <h1 className="font-semibold text-3xl md:text-4xl">
              Rent like a pro with Rental Manager
            </h1>
            <p>
              Posting a listing is just the beginning. Build and sign leases,
              screen tenants, collect rent and fill vacancies with over 30
              million monthly visitors.
            </p>
            <button className="rounded w-full md:w-72 bg-blue-600 hover:bg-blue-700 text-white py-3">
              Get started for free
            </button>
            <button className="underline text-left hover:no-underline">
              View paid services
            </button>
          </div>

          {/* Card-2 */}
          <div className="bg-white w-full lg:w-[23rem] rounded px-6 py-6 flex flex-col text-blue-950">
            <div>
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2025/04/%F0%9F%96%A5-HouseTime.png"
                alt=""
              />
            </div>
            <h2 className="font-semibold py-3">
              Post listings & find renters quickly and easily
            </h2>
            <p className="font-light text-gray-700">
              Create listings in minutes to reach the most visitors of any
              rentals network.*
            </p>
            <button className="text-start text-blue-800 pt-10 hover:text-blue-900 hover:underline">
              Learn more
            </button>
          </div>

          {/* Card-3 */}
          <div className="bg-white w-full lg:w-[23rem] rounded px-6 py-6 flex flex-col text-blue-950">
            <div>
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2025/04/%F0%9F%96%A5-File.png"
                alt=""
              />
            </div>
            <h2 className="font-semibold py-3">
              Create & send leases for signing
            </h2>
            <p className="font-light text-gray-700">
              Build a new lease online or upload your own for signing. Our lease
              tools make it simple.
            </p>
            <button className="text-start text-blue-800 pt-10 hover:text-blue-900 hover:underline">
              Learn more
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-blue-950 px-4 md:px-10 lg:px-20 justify-center flex flex-col lg:flex-row gap-7 mt-8">
          {/* Card-4 */}
          <div className="bg-white w-full lg:w-[23rem] rounded px-6 py-6 flex flex-col text-blue-950">
            <div>
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/51/2025/04/%F0%9F%96%A5-Search.png"
                alt=""
              />
            </div>
            <h2 className="font-semibold py-3">
              Post listings & find renters quickly and easily
            </h2>
            <p className="font-light text-gray-700">
              Create listings in minutes to reach the most visitors of any
              rentals network.*
            </p>
            <button className="text-start text-blue-800 pt-10 hover:text-blue-900 hover:underline">
              Learn more
            </button>
          </div>

          {/* Card-5 */}
          <div className="bg-white w-full lg:w-[23rem] rounded px-6 py-6 flex flex-col text-blue-950">
            <div>
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2025/04/%F0%9F%96%A5-Piggy-1.png"
                alt=""
              />
            </div>
            <h2 className="font-semibold py-3">
              Post listings & find renters quickly and easily
            </h2>
            <p className="font-light text-gray-700">
              Create listings in minutes to reach the most visitors of any
              rentals network.*
            </p>
            <button className="text-start text-blue-800 pt-10 hover:text-blue-900 hover:underline">
              Learn more
            </button>
          </div>

          {/* Card-6 */}
          <div className="bg-white w-full lg:w-[23rem] rounded px-6 py-6 flex flex-col text-blue-950">
            <div>
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2025/04/%F0%9F%96%A5-Tag.png"
                alt=""
              />
            </div>
            <h2 className="font-semibold py-3">
              Create & send leases for signing
            </h2>
            <p className="font-light text-gray-700">
              Build a new lease online or upload your own for signing. Our lease
              tools make it simple.
            </p>
            <button className="text-start text-blue-800 pt-10 hover:text-blue-900 hover:underline">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* Guess Work */}
      <div className="px-4 md:px-16 lg:px-32 py-16 flex flex-col items-center justify-center gap-10 lg:gap-24">
        <h1 className="w-full md:w-[30rem] text-center tracking-wider font-semibold text-2xl md:text-4xl">
          Take the guesswork out of managing your business
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-8">
          <div>
            <img
              src="https://delivery.digitalassets.zillowgroup.com/api/public/content/price-your-rental2x_CMS_Full.png?v=a"
              alt=""
              className="transform lg:scale-[1.2] w-full max-w-xs md:max-w-md lg:w-[38rem]"
            />
          </div>

          <div className="flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-semibold text-xl md:text-2xl tracking-wide">
              Price your rental competitively
            </h1>
            <p className="font-light max-w-[30rem]  ">
              Use our pricing tools to optimize the return on investment for
              your property.
            </p>
            <button className="hover:bg-blue-700 hover:text-white w-full md:w-[22rem] text-blue-700 border border-blue-700 px-8 py-3 rounded">
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* Pros Saying */}
      <div className="bg-blue-900 text-white py-10 sm:py-24 px-4 sm:px-10 flex flex-col items-center gap-10 sm:gap-20">
        <h1 className="font-bold text-2xl sm:text-4xl text-center">
          Here's what the pros are saying
        </h1>
        <p className="w-full sm:w-[36rem] text-base sm:text-xl sm:text-center">
          "With Zillow Rental Manager it was easy to accept messages from
          potential tenants, easy to accept and screen applications (including
          credit/background checks), and even create a lease! Everything was
          nicely integrated into one interface, making it simple and
          centralized." Greg C., TX
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center py-20 gap-10 px-4">
        {/* Right Image - show first on mobile */}
        <div className="w-full  lg:w-auto flex justify-center items-center order-1 lg:order-2">
          <img
            className="w-full max-w-md  lg:max-w-[33rem]" // increased size on lg
            src="https://delivery.digitalassets.zillowgroup.com/api/public/content/premium2x_CMS_Full.png?v=1010307e"
            alt=""
          />
        </div>

        {/* Left Text Box */}
        <div className=" w-full lg:w-[32rem]  order-2 lg:order-1 hover:bg-gray-50 rounded">
          <h1 className="text-xl font-bold tracking-wider text-center lg:text-left">
            Fill vacancies faster with Premium
          </h1>
          <p className="font-extralight pt-1 text-center lg:text-left">
            Get noticed by more renters with the best Rental Manager has to
            offer
          </p>

          {/* Tick Sections */}
          <div className="mt-2 space-y-1">
            <div>
              <h2>
                <span className="text-blue-700 text-xl font-semibold">✓ </span>
                More exposure
              </h2>
              <p className="font-extralight pl-5">
                Renters searching in your area will see your listing more often,
                so you can fill your vacancy faster.
              </p>
            </div>

            <div>
              <h2>
                <span className="text-blue-700 text-xl font-semibold">✓ </span>
                More Listing recommendations
              </h2>
              <p className="font-extralight pl-5">
                Appeal to more renters by following our customized tips.
              </p>
            </div>

            <div>
              <h2>
                <span className="text-blue-700 text-xl font-semibold">✓ </span>
                More Pricing & market insights
              </h2>
              <p className="font-extralight pl-5">
                Track your listing's performance and trends in your market to
                find out if you've positioned your rental competitively.
              </p>
            </div>

            <div>
              <h2>
                <span className="text-blue-700 text-xl font-semibold">✓ </span>
                Priority support
              </h2>
              <p className="font-extralight pl-5">
                Save time and effort with prioritized responses to your
                questions.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="mt-10 rounded px-10 py-3 bg-blue-700 text-white hover:bg-blue-800">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>

      {/* Renting Confident */}
      <div className="hidden sm:block ">
        <div
          className=" w-full  sm:h-60 md:h-[18rem]  bg-no-repeat bg-cover bg-centerm items-center flex flex-col   "
          style={{ backgroundImage: "url('/bg8.png')" }}
        >
          {/* <div className=" h-[191px]  "></div>
          <button className="bg-blue-700 hover:bg-blue-900   w-44  text-white  py-[16px] rounded">
            Get started today
          </button> */}
        </div>
      </div>
      {/* Scan App Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-blue-900 text-white py-16 gap-14 px-4">
        {/* Text Section */}
        <div className="w-full max-w-md flex flex-col gap-8 text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Scan the QR code to get the Zillow Rental Manager App
          </h1>
          <p className="text-lg">
            <span className="font-bold">Simply scan the QR code</span> on the
            right with your phone’s camera, then click the prompt to open the
            app download page.
          </p>
        </div>

        {/* QR Code Image - Hidden on Mobile */}
        <div className="hidden lg:block">
          <img
            className="w-[30rem]"
            src="https://delivery.digitalassets.zillowgroup.com/api/public/content/app-download2x_CMS_Full.png?v=eab55174"
            alt="QR Code"
          />
        </div>
      </div>

      {/*Property Management Resources */}
      <div className="bg-blue-50 border py-20 px-4 lg:px-32">
        <h1 className="font-bold mb-10 text-3xl tracking-wider text-center lg:text-left">
          Property management resources
        </h1>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-36">
          {/* Section 1 */}
          <div className="">
            <h2 className="underline py-5 text-blue-700 text-lg font-semibold hover:text-black hover:no-underline text-center lg:text-left">
              Rental management, tips, tools & trends
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              {/* Box 1 */}
              <div className="bg-slate-100 hover:bg-blue-100 w-full sm:w-60 lg:w-48 h-48 px-5 py-4 font-medium rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://delivery.digitalassets.zillowgroup.com/api/public/content/SearchHeart-resources_CMS_Full.svg?v=67b39028"
                  alt=""
                />
                <p className="pt-5">
                  Getting Your Tenants to Renew Their Lease
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-slate-100 hover:bg-blue-100 w-full sm:w-60 lg:w-48 h-48 px-5 py-4 font-medium rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://delivery.digitalassets.zillowgroup.com/api/public/content/SearchHeart-resources_CMS_Full.svg?v=67b39028"
                  alt=""
                />
                <p className="pt-5">
                  Frozen Pipes and Other Winter Issues Your Tenants Aren’t
                  Taking Care Of
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="">
            <h2 className="underline py-5 text-blue-700 text-lg font-semibold hover:text-black text-center lg:text-left">
              Apartment marketing
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              {/* Box 3 */}
              <div className="bg-slate-100 hover:bg-blue-100 w-full sm:w-60 lg:w-48 h-48 px-5 py-4 font-medium rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://delivery.digitalassets.zillowgroup.com/api/public/content/SearchHeart-resources_CMS_Full.svg?v=67b39028"
                  alt=""
                />
                <p className="pt-5">
                  Essential Online Tools for Property Managers and Renters
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-slate-100 hover:bg-blue-100 w-full sm:w-60 lg:w-48 h-48 px-4 py-4 font-medium rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://delivery.digitalassets.zillowgroup.com/api/public/content/SearchHeart-resources_CMS_Full.svg?v=67b39028"
                  alt=""
                />
                <p className="pt-5">
                  Your Guide to 2024: Zillow Rentals Consumer Housing Trends
                  Report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 hidden sm:block">
        <p className="text-xs px-10 py-16 text-gray-600">
          * Comscore Media Metrix® Multi-Platform, Custom-defined list: Zillow
          Rentals, Apartments.com Network, Rent., Apartmentlist.com, and Zumper
          inc, Total Audience, Jan-Dec 2023, U.S.
        </p>
        <hr className=" " />
      </div>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row px-6 lg:px-28 py-14 gap-10 lg:gap-0 justify-between">
        {/* Logo Section */}
        <div className="w-40 lg:w-56 mx-auto lg:mx-0">
          <img
            src="https://nodes3cdn.hotpads.com/zrm-marketing-web/10901/_next/static/media/rentals-logo.7408c40b.svg"
            alt="Logo"
            className="w-full"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-56 text-center lg:text-left">
          {/* Column 1 */}
          <div className=" flex flex-col text-blue-700 gap-2">
            <span className="font-medium text-black">Rental Manager</span>
            <a className="underline hover:text-black" href="#">
              Overview
            </a>
            <a className="underline hover:text-black" href="#">
              Price my rental
            </a>
            <a className="underline hover:text-black" href="#">
              Listing
            </a>
            <a className="underline hover:text-black" href="#">
              Applications
            </a>
            <a className="underline hover:text-black" href="#">
              Leases
            </a>
            <a className="underline hover:text-black" href="#">
              Payment
            </a>
          </div>

          {/* Column 2 */}
          <div className=" flex flex-col text-blue-700 gap-2">
            <span className="font-medium text-black">
              Apartment advertising
            </span>
            <a className="underline hover:text-black" href="#">
              Overview
            </a>
            <a className="underline hover:text-black" href="#">
              Subscription based ads
            </a>
            <a className="underline hover:text-black" href="#">
              Pay-per-lease ads
            </a>
            <a className="underline hover:text-black" href="#">
              Syndicate listings
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-blue-800 text-white flex flex-col lg:flex-row px-6 lg:px-20 py-10 justify-between items-center gap-6">
        <p className="text-sm text-center lg:text-left">
          © 2025 Zillow Group, Inc. and its subsidiaries. All rights reserved.{" "}
          <span className="underline hover:no-underline">
            Cookie Preferences
          </span>
        </p>

        <div className="flex gap-3 text-xl text-blue-600">
          <a
            href="https://facebook.com"
            className="p-1 rounded bg-white"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className="p-1 rounded bg-white"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="p-1 rounded bg-white"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com"
            className="p-1 rounded bg-white"
            target="_blank"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Managerentals;

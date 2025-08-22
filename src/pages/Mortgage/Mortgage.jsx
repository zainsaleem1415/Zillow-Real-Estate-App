import React from "react";
import ImageSlider from "./ImageSlider";

import ScrollSlider from "./ScrollSlider";
import Footer2 from "../../components/Footer/Footer2";

const Getmortgage = () => {
  const slides = [
    { url: "https://example.com/image1.jpg", title: "Beautiful Nature" },
    { url: "https://example.com/image2.jpg", title: "Mountain View" },
    { url: "https://example.com/image3.jpg", title: "Ocean Sunset" },
  ];
  return (
    <div>
      {/* Get the Loan for home. */}
      <div className=" rounded-xl overflow-hidden mx-4 my-4 md:mx-16 md:max-w-6xl ">
        <div className="flex flex-col md:flex-row  justify-around">
          {/* Text Content - Left Side */}
          <div className="p-6 md:px-16  flex flex-col justify-between space-y-4 bg-white md:max-w-[30rem] ">
            <span className="inline-block bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-xs font-semibold w-fit">
              Zillow Home Loans
            </span>

            <h1 className="md:w-72 text-3xl font-bold md:font-black leading-snug text-gray-900 md:text-[38px]">
              Get the loan that gets you home
            </h1>

            <p className="text-gray-600  ">
              We offer mortgage loans with no hidden fees and guidance at every
              step. Start now by seeing what you can afford.
            </p>

            <div className="flex flex-col space-y-3 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full md:w-[12rem]">
                Get pre-qualified
              </button>

              <p className="text-sm md:pt-5 text-gray-500 text-center md:text-left">
                Already working with us?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Access your dashboard
                </a>
              </p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="max-w-[65vh] bg-gray-50  ">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/zhl-hero-img-lg%402x-1.jpg"
              alt="Happy homeowner with keys"
              className=" "
            />
          </div>
        </div>
      </div>
      {/* Why Zillow Home Loans ? */}
      <div className=" py-16 px-14">
        <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-center">
          Why Zillow Home Loans?
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-around py-12">
          {/* Card-1 */}
          <div className="flex flex-col text-center items-center max-w-72">
            <div className="text-center">
              <img
                src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/graph.svg"
                alt=""
              />
            </div>
            <div className="">
              <h2 className="text-xl md:text-xl font-bold">
                Competitive rates
              </h2>
              <p className="text-gray-700 md:max-w-72 text-center">
                Strong rates, no hidden fees, and total transparency to keep you
                informed and up to date.
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col text-center items-center max-w-72">
            <div className="text-center">
              <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/hand-money.svg" />
            </div>
            <div className="">
              <h2 className="text-xl md:text-xl font-bold">
                Low down payment options
              </h2>
              <p className="text-gray-700 md:max-w-72 text-center">
                We offer a variety of loan options to meet your needs and help
                make home ownership more affordable.
              </p>
            </div>
          </div>
          {/* Card-3 */}
          <div className="flex flex-col text-center items-center max-w-72">
            <div className="text-center">
              <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/man-paperwork.svg" />
            </div>
            <div className="">
              <h2 className="text-xl md:text-xl font-bold">
                Top-rated loan officers
              </h2>
              <p className="text-gray-700 md:max-w-72 text-center">
                With a 4.9-star average ratingHelp, our loan officers provide
                step-by-step guidance and expertise in first-time home buying.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* home financing journey starts */}
      <div>
        <div className=" bg-green-700 text-white md:px-20 px-5 py-2 md:py-10">
          <h1 className="text-3xl font-extrabold">
            Your <span className="text-green-400">home financing journey</span>{" "}
            starts here
          </h1>
          <p className="pt-5">
            Not sure where to begin? Follow these steps to get home on your
            budget.
          </p>
          <ImageSlider slides={slides} />
        </div>
      </div>
      {/* Track your buy ability */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-28 my-8 md:my-12 rounded-2xl overflow-hidden shadow-lg">
        {/* Content Section */}
        <div className="bg-blue-900 w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-10 md:py-14">
          <h1 className="text-white font-extrabold text-2xl md:text-3xl">
            See what you can
          </h1>
          <h1 className="text-blue-300 font-extrabold text-2xl md:text-3xl">
            afford with BuyAbility
          </h1>
          <p className="text-white py-4 text-sm md:text-base">
            Zillow Home Loans' affordability tool gives you a personalized
            estimate based on real-time interest rates and even details like
            credit, insurance and taxes.
          </p>
          <button className="bg-white font-semibold text-blue-800 px-4 py-2 rounded-xl w-40">
            Get your BuyAbility
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:flex-1">
          <img
            src="/buyability.png"
            alt="BuyAbility"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Popular Loan Options */}
      <div className="px-4 md:px-24 bg-gray-100 py-10 flex flex-col items-center">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center leading-snug">
          Most popular loan options from Zillow Home Loans
        </h1>

        {/* Cards Wrapper */}
        <div className="flex overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap gap-6 pt-10 w-full md:justify-center scrollbar-hide">
          {/* Card 1 */}
          <div className="flex-shrink-0 bg-white shadow-lg rounded-2xl px-4 py-6 w-[90%] sm:w-[22rem] flex flex-col items-center mx-auto md:mx-0">
            <h2 className="font-bold text-xl md:text-2xl">Conventional loan</h2>
            <p className="text-sm text-gray-600">The most common loan type</p>
            <p className="bg-green-300 rounded-2xl px-2 text-xs mt-2 mb-7">
              good for versatility
            </p>
            <div className="bg-slate-100 rounded-2xl mb-4 w-full">
              <ul className="list-disc px-10 py-6 h-48 rounded-2xl text-sm flex flex-col">
                <li className="font-semibold">3% min down payment</li>
                <li>Fixed and adjustable rates</li>
                <li className="text-blue-700 underline">See sample terms</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 bg-white shadow-lg rounded-2xl px-4 py-6 w-[90%] sm:w-[22rem] flex flex-col items-center mx-auto md:mx-0">
            <h2 className="font-bold text-xl md:text-2xl">FHA loan</h2>
            <p className="text-sm text-gray-600">
              Popular with first-time buyers
            </p>
            <p className="bg-green-300 rounded-2xl px-2 text-xs mt-2 mb-7">
              good for lower credit profiles
            </p>
            <div className="bg-slate-100 rounded-2xl mb-4 w-full">
              <ul className="list-disc px-10 py-6 h-48 rounded-2xl text-sm">
                <li className="font-semibold">3.5% min down payment</li>
                <li>Flexible credit requirements</li>
                <li className="text-blue-700 underline">See sample terms</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 bg-white shadow-lg rounded-2xl px-4 py-6 w-[90%] sm:w-[22rem] flex flex-col items-center mx-auto md:mx-0">
            <h2 className="font-bold text-xl md:text-2xl">VA loan</h2>
            <p className="text-sm text-gray-600">
              For eligible military, veterans and reserves
            </p>
            <p className="bg-green-300 rounded-2xl px-2 text-xs mt-2 mb-7">
              good for eligible military
            </p>
            <div className="bg-slate-100 rounded-2xl mb-4 w-full">
              <ul className="list-disc px-10 py-6 h-48 rounded-2xl text-sm">
                <li className="font-semibold">0% min down payment</li>
                <li>Reduced closing costs</li>
                <li className="text-blue-700 underline">See sample terms</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 py-6 px-2 text-sm md:text-base">
          Want to understand your loan options? Let's find the best mortgage for
          you.
        </p>

        <button className="bg-blue-600 text-white rounded-xl px-4 py-2 text-sm md:text-base">
          Get Started
        </button>
      </div>
      {/* Zillow home loan */}
      <div className="md:px-20 md:py-6 px-1">
        <ScrollSlider />
      </div>
      {/* Home Financing */}
      <div className="bg-green-700 py-10 px-4">
        <h1 className="text-white text-2xl sm:text-[44px] text-center font-extrabold py-8">
          Learn more about home financing
        </h1>

        {/* Scrollable Cards Wrapper */}
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide md:justify-center">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-[90%] sm:w-96 bg-white rounded-xl h-[23rem] p-4">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-1%402x.jpg"
              alt=""
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="font-bold text-[18px] pt-5">
              Pre-qualified vs. pre-approved:
            </h2>
            <h2 className="font-bold text-[18px] pb-5">
              What’s the difference?
            </h2>
            <button className="text-blue-800 underline font-semibold py-4">
              Read article
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-[90%] sm:w-96 bg-white rounded-xl h-[23rem] p-4">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-2%402x.jpg"
              alt=""
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="font-bold text-[18px] py-5">
              How your credit score is calculated
            </h2>
            <button className="text-blue-800 underline font-semibold pt-6">
              Read article
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[90%] sm:w-96 bg-white rounded-xl h-[23rem] p-4">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-3%402x.jpg"
              alt=""
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="font-bold text-[18px] py-5">
              How your credit score is calculated
            </h2>
            <button className="text-blue-800 underline font-semibold pt-6">
              Read article
            </button>
          </div>
        </div>

        <p className="text-center text-white py-10 text-sm sm:text-base">
          Want more content? Visit our{" "}
          <span className="underline">Learning Center</span>
        </p>
      </div>
      {/* Ready to take */}
      <div className="flex flex-col lg:flex-row justify-between border border-gray-200 rounded-2xl my-10 mx-4 lg:mx-24 py-10 px-6 lg:px-16 h-auto lg:h-[25rem]">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            Ready to take the first step?
          </h1>
          <p className="py-4">
            See how much home you qualify for with a pre-qualification today.
          </p>
          <button className="bg-blue-700 rounded-xl text-white py-2 px-4 my-4">
            Get Started
          </button>
          <p className="font-bold md:pt-16">Have questions? We can help.</p>
          <p className="text-sm">
            Check out our <span className="text-blue-800">FAQ</span> or give us
            a call at (855) 917-2501.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-6 lg:mt-0 flex justify-center  ">
          <img
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634105.svg"
            alt=""
            className="w-full max-w-[28rem]"
          />
        </div>
      </div>
      {/* Footer-2 */}
      <Footer2 />
    </div>
  );
};

export default Getmortgage;

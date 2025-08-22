import React from "react";
import AgentCard from "./AgentCard";
import Footer2 from "../../components/Footer/Footer2";

const Advertise = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="font-bold text-[1.8rem] md:text-[2.4rem] font-serif text-center">
          Partner with Zillow to Grow Your Business
        </h1>
        <p className="text-gray-700 p-5 text-center">
          Reach millions of buyers, sellers and renters on the largest real
          estate network on the web.
        </p>
        <hr className="border-yellow-500 border w-36 my-2" />
        <p className="font-semibold text-[1.2rem] md:text-[1.4rem] p-5 tracking-wide text-center">
          Select your industry to get started
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
        <AgentCard
          head="I'm an agent or broker"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Agent-2x-1be0e4.png"
        />
        <AgentCard
          head="I'm a property manager"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Property-manager-2x-865bcd.png"
        />
        <AgentCard
          head="I'm a landlord"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Landlord-2x-14539b.png"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center mt-5 px-4">
        <AgentCard
          head="I'm a lender or loan officer"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Lender-2x-2c744a.png"
        />
        <AgentCard
          head="I'm a builder"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Builder-2x-d8b9c6.png"
        />
        <AgentCard
          head="I am a brand or local advertiser"
          img="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Brand-advertiser-2x-ba73a6.png"
        />
      </div>
      <div className="py-16 px-4 sm:px-10 lg:px-20 xl:px-44 mt-14">
        <h1 className="font-bold tracking-wide text-center text-xl sm:text-2xl text-black">
          Reach your target audience on our network of leading real estate
          sites.
        </h1>
        <img
          className="py-10 w-full h-auto"
          src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/Zillow_Sites2x-cd3144-c697dc-fbb28e-1440x77.png"
          alt="Zillow Network"
        />
      </div>

      {/* Zillow Group Audience */}
      <div className="bg-blue-950 text-white flex flex-col items-center text-center px-2 py-10">
        <h2 className="font-semibold text-2xl text-white py-6">
          Zillow Group Audience
        </h2>

        {/* Card Container */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          {/* Card 1 */}
          <div className="max-w-80  flex flex-col items-center gap-5 p-4">
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/42-1ae07b-392e2d.png"
              alt=""
            />
            <h2 className="font-bold text-2xl">41% to buy or sell</h2>
            <p className="text-sm">
              Nearly 41% of people who visited Zillow and/or Trulia in the past
              12 months are planning to buy and/or sell a home in the next 12
              months.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-80 border-white flex flex-col items-center gap-5 p-4">
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/160M-db1f4a-2e10e9.png"
              alt=""
            />
            <h2 className="font-bold text-2xl">194 million</h2>
            <p className="text-sm">
              More than 194 million average monthly unique users visited Zillow
              Group brands’ mobile apps and websites in Q2 2019.
            </p>
          </div>

          {/* Card 3 */}
          <div className="max-w-80  border-white flex flex-col items-center gap-5 p-4">
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2023/01/32M-de7e86-72e8ff.png"
              alt=""
            />
            <h2 className="font-bold text-2xl">Most visited rental network</h2>
            <p className="text-sm">
              Zillow Rentals is the most visited rental network.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-[42rem] py-10 px-4">
          <p className="text-[10px] leading-relaxed">
            Source: 41% stat: Zillow Group Tracking Survey, Q2 2019. 194 million
            stat: Google Analytics and Adobe Analytics. Rental network claim:
            Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined
            list including: Zillow Rentals, Apartments.com Network, RentPath
            Network, ForRent.com & Homes.com Network, Total Visits, July 2020,
            United States. Zillow Rentals is the deduplicated reach of
            Zillow.com Rentals, Trulia.com Rentals and HotPads.com.
          </p>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Advertise;

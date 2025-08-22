import React from "react";
import Slider from "./Slider";
 import Card from "./Card";
 import SimpleList from "./SimpleList";
import Footer from "../../components/Footer/Footer";
import Footer5 from "../../components/Footer/Footer5";

const Home = () => {
  const image1 =
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp";
  const image2 =
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp";
  const image3 =
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp";

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className=" p-6 bg-[url('https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/07/image2-xl@1x.jpg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] md:h-[50vh] md:pl-32 md:p-16">
        <div className="mt-7 ">
          <div className="text-white  font-black text-4xl md:text-[3.5rem] mx-2">
            <h1 className="py-2">Agents. Tours.</h1>
            <h1 className="md:py-4 py-1">Loans. Homes.</h1>
          </div>

          <div className="w-full md:w-[39%] p-2 border-none text-[#433d3d] text-sm md:text-[15px] font-light outline-none mt-4">
            <input
              type="text"
              placeholder="Enter an Address, neighborhood, city or ZIP code"
              className="focus:outline-none rounded-lg focus:border-white w-full h-12 md:h-16 px-3"
            />
          </div>
        </div>
      </div>

      {/* Personalized Experience Section */}
      <div className="bg-gray-50 flex  flex-col  md:flex-row p-6 md:p-12 md:gap-36 items-center justify-center">
        <div className="text-center md:text-left mb-6 md:mb-0 ">
          <p className="font-bold text-lg md:text-3xl">
            Get home recommendations
          </p>
          <p className="text-gray-600 font-extralight text-lg my-3">
            Sign in for a more personalized experience.
          </p>
          <button className="text-blue-700 font-semibold border text-lg  border-blue-700 py-2 px-6 rounded-lg my-2">
            Sign in
          </button>
        </div>
        <div className="rounded-2xl border border-gray-100 overflow-hidden">
          <img
            src="https://www.zillowstatic.com/s3/web-platform/sub-apps/hops-homepage/hops-homepage.prod.master.9742080.5d1bbba3/web/1d9d5bce566c85fa242cb21ad3292cb8.webp"
            alt="Personalized experience"
            className="w-full max-w-[31rem] "
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="py-6 md:py-10">
        <Slider />
      </div>  

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 justify-center md:h-[34rem] bg-slate-100 py-6 md:py-10">
        <Card
          img={image1}
          heading="Buy a home"
          text="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
          btn="Browse homes"
        />
        <Card
          img={image2}
          heading="Sell a home"
          text="No matter what path you take to sell your home, we can help you navigate a successful sale."
          btn="Find your Options"
        />
        <Card
          img={image3}
          heading="Find Rentals"
          text="We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
          btn="Browse homes"
        />
      </div>

      {/* About Section */}
      <div className="px-4 md:px-16 py-5">
        <h3 className="text-center font-bold">
          About Zillow&apos;s Recommendations
        </h3>
        <p className="text-center text-gray-500 text-sm md:text-base">
          Recommendations are based on your location and search activity, such
          as the homes you&apos;ve viewed and saved and the filters you&apos;ve
          used. We use this information to bring similar homes to your
          attention, so you don&apos;t miss out.
        </p>
      </div>

      {/* Simple Lists Section */}
      <div className="grid grid-cols-2 md:flex md:justify-around px-4 md:px-24 gap-4">
        <SimpleList
          btntext="Real Estate"
          items={[
            "Browse all Homes",
            "Albuquerque real estate",
            "Austin real estate",
            "Boston real estate",
            "Chicago real estate",
          ]}
        />
        <SimpleList
          btntext="Rentals"
          items={[
            "Browse all Homes",
            "Albuquerque rentals",
            "Austin rentals",
            "Boston rentals",
            "Chicago rentals",
          ]}
        />
        <SimpleList
          btntext="Mortgage Rates"
          items={[
            "Current rates",
            "Mortgage calculator",
            "Refinance rates",
            "First-time homebuyers",
            "Loan options",
          ]}
        />
        <SimpleList
          btntext="Browse homes"
          items={["California", "Texas", "New York", "Florida", "Ohio"]}
        />
      </div>

      <div className="flex flex-col items-center my-4">
        <hr className="w-[92%] border border-slate-300" />
      </div>

      {/* Footer */}
      <div className="h-auto md:h-[40rem] block md:hidden">
        <Footer />
      </div>
      <div className="hidden sm:block pb-8">
        <Footer5 />
      </div>
    </div>
  );
};

export default Home;

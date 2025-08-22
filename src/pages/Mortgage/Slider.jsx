import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/2017_ZillowExteriors_218-1.jpg",
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/GettyImages-472069091-Edit.jpg",
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/shutterstock_529108441.jpg",
    "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/shutterstock_529108441.jpg",
  ];

  return (
    <>
      <div className="flex items-center flex-col px-4 md:px-20">
        <div className="w-full text-center md:text-left">
          <h2 className="font-extrabold text-lg md:text-xl">
            Find homes you can afford with BuyAbility℠
          </h2>
          <p className="text-gray-600 font-extralight text-sm md:text-base">
            Answer a few questions. We'll highlight homes you're likely to
            qualify for.
          </p>
        </div>

        <div className="w-full py-4 flex flex-col md:flex-row gap-4">
          {/* Fixed Box - Now full width on mobile */}
          <div className="w-full md:w-[320px] h-auto md:h-64 rounded-lg">
            <div className="border border-gray-300 h-auto md:h-44 rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <img
                className="w-24 md:w-36 mx-auto md:mx-0"
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">$--</span>
                  <span className="font-light text-xs">
                    Suggested target price
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">$--</span>
                  <span className="font-light text-xs">BuyAbility℠</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">$--</span>
                  <span className="font-light text-xs">Mo. payment</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">--%</span>
                  <span className="font-light text-xs">Today's rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">--%</span>
                  <span className="font-light text-xs">APR</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="h-12 md:h-14 w-full mt-3 rounded-xl bg-blue-700 text-white text-sm md:text-base"
            >
              Let's get started
            </button>
          </div>

          {/* Swiper Area - Now full width on mobile */}
          <div className="w-full md:max-w-[calc(100%-320px)]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={2.5} // Fewer slides on mobile
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
            >
              {images.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="h-48 md:h-64 rounded-xl overflow-hidden border border-gray-300 relative">
                    <img
                      src={url}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[65%] object-cover"
                    />
                    <button className="absolute top-2 left-2 bg-orange-500 rounded-lg text-white text-xs px-1">
                      Within buyAbility
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Modal - Responsive */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-4 md:p-6 relative">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center">BuyAbility</h2>
            <hr className="w-full border border-black mb-4" />

            <h2 className="text-lg md:text-xl font-bold mb-4">
              Buying a home is a big move. We're here to help you every step
              of the way.
            </h2>

            <p className="text-gray-700 text-sm md:text-base mb-6">
              Let's figure out what you can afford and track how it changes
              over time. If you're not sure of something, it's okay to take
              your best guess.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm md:text-base">Tell us about your plans</p>
                <p className="text-sm md:text-base">Where do you plan to buy a home?</p>
                <input
                  type="text"
                  placeholder="Enter Area"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">
                  How much have you saved for a down payment?
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">
                  How much are you comfortable spending per month?
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">Tell us about your finances</p>
                <p className="font-semibold text-sm md:text-base">
                  What is your annual income before taxes?
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">
                  What is the minimum you're required to pay in monthly debt payments?
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">What is your credit score?</p>
                <input
                  type="text"
                  placeholder="$"
                  className="w-full border border-gray-400 p-2 rounded text-sm md:text-base"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
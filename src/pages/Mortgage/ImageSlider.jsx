// ImageSlider.jsx
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      title: "Prepare your finances",
      description:
        "Review your credit score and income — and avoid taking out loans, opening credit cards or making large purchases for six months.",
      button: "Calculate your BuyAbility",
      image:
        "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634234.svg",
    },
    {
      title: "Get pre-qualified",
      description:
        "In as little as five minutes, get an estimate of what you can borrow with Zillow Home Loans — with no impact to your credit.",
      button: "Pre-qualify today",
      image:
        "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634235.svg",
    },
    {
      title: "Get pre-approved",
      description:
        "Make strong offers on homes with a Verified Pre-approval letter. A Zillow Home Loans loan officer will review your documents and verify the amount you're approved for.",
      button: "Get pre-approved",
      image:
        "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634236.svg",
    },
    {
      title: "Find your home",
      description:
        "Explore neighborhoods and get personalized recommendations based on your preferences and budget.",
      button: "Start home search",
      image:
        "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634234.svg",
    },
    {
      title: "Make an offer",
      description:
        "Learn how to make a competitive offer in today's market with our expert guidance.",
      button: "See offer strategies",
      image:
        "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/Group-634235.svg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;
  const slideWidth = 100 / slidesToShow;

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? slides.length - slidesToShow : currentIndex - 1;
    setCurrentIndex(Math.max(newIndex, 0));
  };

  const goToNext = () => {
    const newIndex =
      currentIndex >= slides.length - slidesToShow ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (distance > threshold) goToNext();
    if (distance < -threshold) goToPrevious();

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mobile view (scrollable vertically)
  if (isMobile) {
    return (
      <div className="w-full py-4 space-y-4 overflow-y-auto px-4 max-h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-sm p-4 border border-gray-200"
          >
            <div className="flex flex-col h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-14 w-auto object-contain mx-auto mb-3"
              />
              <h2 className="font-bold text-gray-800 text-lg mb-2 text-center">
                {slide.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 text-center">
                {slide.description}
              </p>
              <button className="text-blue-900 underline text-sm font-semibold mx-auto">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop view (horizontal slider)
  return (
    <div className="relative w-full overflow-x-hidden py-6 px-2">
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 px-2">
              <div className="h-full bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex flex-col h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-16 w-auto object-contain mx-auto mb-3"
                  />
                  <h2 className="font-bold text-gray-800 text-lg mb-2 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {slide.description}
                  </p>
                  <button className="text-blue-900 underline text-sm font-semibold mx-auto">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 rounded-full bg-white p-2 text-blue-900 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 rounded-full bg-white p-2 text-blue-900 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
        >
          &#8594;
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: slides.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-blue-900"
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

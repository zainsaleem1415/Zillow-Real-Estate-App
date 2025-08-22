const images = [
  "https://delivery.digitalassets.zillowgroup.com/api/public/content/4044fa61c08d4e4981f225cec842b4e0?v=1bfe199c",
  "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/testimonials-photo-2-lg%401x.jpg",
  "https://delivery.digitalassets.zillowgroup.com/api/public/content/0396ae23c62e43f4b9125b1a64890f3c?v=d8879592",
  "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/zhllp_familytestimonials-photo1.jpg",
  "https://delivery.digitalassets.zillowgroup.com/api/public/content/04bce98078f449d39bf87832cffd5735?v=a8140f64",
  "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/testimonials-photo-3-lg%402x.png",
];

const ScrollSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl md:text-left text-center">
        Buyers like you ❤️ Zillow Home Loans
      </h1>
      <p className="py-4 text-center md:text-left text-sm sm:text-base">
        Here's how happy homeowners made home a reality with our loan officers.
      </p>

      {/* Scrollable Container */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-fit md:w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[300px] md:w-[30%] h-72 bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;

import React, { useState, useRef, useEffect } from "react";

const PriceDropdown = () => {
  const [show, setShow] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShow(!show);

  const handleApply = () => {
    alert(`Min: ${minPrice || "N/A"}, Max: ${maxPrice || "N/A"}`);
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const priceOptions = [
    "10,000",
    "50,000",
    "1,00,000",
    "5,00,000",
    "10,00,000",
    "50,00,000",
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-8 py-[6px] rounded border border-gray-400"
      >
        Price
      </button>

      {show && (
        <div className="absolute z-50 top-full mt-2 w-64 bg-white rounded-md shadow-lg p-4 space-y-3">
          {/* Line 1 & 2: Input Fields */}
          <div className="flex justify-between gap-2">
            <input
              type="text"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            />
          </div>

          {/* Line 3: Small dropdowns */}
          <div className="flex justify-between gap-2">
            <select
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
            >
              <option value="">Min Select</option>
              {priceOptions.map((price, i) => (
                <option key={i} value={price}>
                  {price}
                </option>
              ))}
            </select>

            <select
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            >
              <option value="">Max Select</option>
              {priceOptions.map((price, i) => (
                <option key={i} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>

          {/* Line 4: Info Line */}
          <p className="text-sm text-blue-600 hover:underline cursor-pointer">
            Calculate your buy ability
          </p>

          {/* Line 5: Apply Button */}
          <button
            onClick={handleApply}
            className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-sm"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;

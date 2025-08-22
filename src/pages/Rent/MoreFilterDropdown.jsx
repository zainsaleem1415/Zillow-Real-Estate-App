import React, { useState, useEffect, useRef } from "react";

const MoreFiltersDropdown = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShow(!show);
  const closeDropdown = () => setShow(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-8 py-[6px] rounded border border-gray-400"
      >
        More
      </button>

      {show && (
        <div className="absolute top-full mt-2 w-[300px] bg-white rounded-md shadow-lg p-4 space-y-4">
          <h3 className="text-lg font-semibold">More Filters</h3>

          {/* Max HOA */}
          <div>
            <label className="block text-sm font-medium mb-1">Max HOA?</label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>Any</option>
              <option>$100</option>
              <option>$200</option>
              <option>$500</option>
            </select>
          </div>

          {/* Parking Spots */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Parking Spots
            </label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
            <label className="flex items-center mt-2 text-sm gap-2">
              <input type="checkbox" />
              Must have garage
            </label>
          </div>

          {/* Square Feet */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Square Feet
            </label>
            <div className="flex gap-2">
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Min</option>
                <option>500</option>
                <option>1000</option>
              </select>
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Max</option>
                <option>2000</option>
                <option>3000</option>
              </select>
            </div>
          </div>

          {/* Lot Size */}
          <div>
            <label className="block text-sm font-medium mb-1">Lot Size</label>
            <div className="flex gap-2">
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Min</option>
                <option>1000 sqft</option>
                <option>2000 sqft</option>
              </select>
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Max</option>
                <option>5000 sqft</option>
                <option>10000 sqft</option>
              </select>
            </div>
          </div>

          {/* Year Built */}
          <div>
            <label className="block text-sm font-medium mb-1">Year Built</label>
            <div className="flex gap-2">
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Min</option>
                <option>1950</option>
                <option>2000</option>
              </select>
              <select className="w-1/2 border rounded px-2 py-1 text-sm">
                <option>Max</option>
                <option>2020</option>
                <option>2025</option>
              </select>
            </div>
          </div>

          {/* Basement */}
          <div>
            <label className="block text-sm font-medium mb-1">Basement</label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>Any</option>
              <option>Finished</option>
              <option>Unfinished</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-2">
            <button
              onClick={() => alert("Filters reset")}
              className="text-blue-600 text-sm underline"
            >
              Reset all filters
            </button>
            <button
              onClick={() => {
                alert("Filters applied");
                closeDropdown();
              }}
              className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFiltersDropdown;

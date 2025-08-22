import React, { useState, useRef, useEffect } from "react";

const BedroomBathroomDropdown = () => {
  const [show, setShow] = useState(false);
  const [selectedBedroom, setSelectedBedroom] = useState("Any");
  const [selectedBathroom, setSelectedBathroom] = useState("Any");
  const [exactMatch, setExactMatch] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShow(!show);

  const handleApply = () => {
    alert(
      `Bedrooms: ${selectedBedroom}\nBathrooms: ${selectedBathroom}\nExact Match: ${
        exactMatch ? "Yes" : "No"
      }`
    );
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

  const boxOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-6 py-[6px] rounded border border-gray-400 "
      >
        Bedrooms
      </button>

      {show && (
        <div className="absolute z-50 top-full mt-2 w-72 bg-white rounded-md shadow-lg p-4 space-y-4">
          {/* Bedrooms Section */}
          <div>
            <p className="text-sm font-medium mb-2">Number of Bedrooms</p>
            <div className="flex flex-wrap gap-2">
              {boxOptions.map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedBedroom(label)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedBedroom === label
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 mt-2 text-sm">
              <input
                type="checkbox"
                checked={exactMatch}
                onChange={() => setExactMatch(!exactMatch)}
              />
              Use exact match
            </label>
          </div>

          {/* Bathrooms Section */}
          <div>
            <p className="text-sm font-medium mb-2">Number of Bathrooms</p>
            <div className="flex flex-wrap gap-2">
              {boxOptions.map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedBathroom(label)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedBathroom === label
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
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

export default BedroomBathroomDropdown;

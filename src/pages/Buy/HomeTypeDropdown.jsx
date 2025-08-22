import React, { useState, useRef, useEffect } from "react";

const HomeTypeDropdown = () => {
  const [show, setShow] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const dropdownRef = useRef(null);

  const homeTypes = [
    "Houses",
    "Townhomes",
    "Multi-family",
    "Condos",
    "Lots/Land",
    "Apartments",
    "Manufactured",
  ];

  const toggleDropdown = () => setShow(!show);

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const isAllSelected = homeTypes.every((type) => selectedTypes.includes(type));

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(homeTypes);
    }
  };

  const handleApply = () => {
    alert(`Selected Home Types:\n${selectedTypes.join(", ") || "None"}`);
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

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-[6px] rounded border border-gray-400"
      >
        Home Type
      </button>

      {show && (
        <div className="absolute top-full mt-2 w-64 bg-white rounded-md shadow-lg p-4 space-y-3">
          <p className="text-sm font-medium">Home Type</p>

          {/* Select All */}
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAllChange}
            />
            Select All
          </label>

          {/* Individual Checkboxes */}
          <div className="space-y-2 pl-4">
            {homeTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-sm mt-2"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeTypeDropdown;

import React, { useState, useRef, useEffect } from "react";

const DropdownRadio = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShow(!show);
  };

  const handleApply = () => {
    alert(`Selected: ${selected || "None"}`);
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left ">
      <button
        onClick={toggleDropdown}
        className="px-7 py-[6px] rounded border border-gray-400 "
      >
        {selected || "For Sale"}
      </button>

      {show && (
        <div className="absolute z-50 top-full mt-2 w-48 bg-white rounded-md shadow-lg p-4 space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="For Sale"
              checked={selected === "For Sale"}
              onChange={(e) => setSelected(e.target.value)}
            />
            For Sale
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="For Rent"
              checked={selected === "For Rent"}
              onChange={(e) => setSelected(e.target.value)}
            />
            For Rent
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="For Sold"
              checked={selected === "For Sold"}
              onChange={(e) => setSelected(e.target.value)}
            />
            For Sold
          </label>

          <button
            onClick={handleApply}
            className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownRadio;

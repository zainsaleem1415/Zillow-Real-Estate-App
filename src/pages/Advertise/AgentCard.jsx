import React from "react";

const AgentCard = ({ img, head }) => {
  return (
    <div className="border border-gray-300 bg-white flex flex-col items-center w-full max-w-sm rounded overflow-hidden shadow-xl">
      <div>
        <img src={img} alt={head} className="w-full h-auto object-contain" />
      </div>
      <div className="px-4 py-6 flex flex-col items-center gap-6">
        <h1 className="font-semibold text-xl sm:text-2xl text-center">
          {head}
        </h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded w-full sm:w-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AgentCard;

import { useState } from 'react';

export default function DropdownList({ items, btntext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        {isOpen ? (
          <>
            <span></span>
            <span>{btntext}</span>
          </>
        ) : (
          <>
            <span></span>
            <span>{btntext}</span>
          </>
        )}
      </button>

      {isOpen && (
        <ul className="mt-2 pl-6 list-disc space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
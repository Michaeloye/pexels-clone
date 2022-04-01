import React from "react";

// This component is being used in like two places so the props are for better responsiveness
function SearchBar({ show, placeholder, size }) {
  return (
    <div
      className={
        "relative w-3/5 lg:w-1/2 lg:block " + (show ? "visible" : "invisible")
      }
    >
      <input
        type="text"
        id="email-adress-icon"
        className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm outline-none"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;

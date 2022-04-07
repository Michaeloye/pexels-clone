import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchBarDropdown from "./SearchBarDropdown/SearchBarDropdown";

// This component is being used in like two places so the props are for better responsiveness
function SearchBar({ show, placeholder, size }) {
  const [searchOnFocus, setSearchOnFocus] = useState(false);
  return (
    // main
    <div className={"w-full max-w-[750px] " + (show ? "visible" : "invisible")}>
      {/* search bar */}
      <form className="relative z-10 ">
        {/* search bar container */}
        <div className="flex bg-white bg-opacity-95 border-none rounded-[6px] z-10">
          <input
            autoCapitalize="none"
            autoComplete="off"
            id="search"
            placeholder="Search for free photos"
            required="required"
            type="search"
            className={
              "block py-[8.75px] px-[17.5px] font-medium lg:font-light leading-[22px] my-0 flex-1 " +
              "rounded-tl-[6px] rounded-bl-[6px] bg-transparent border-none text-[#1a1a1a] " +
              "md:py-[12.6px] md:px-[17.5px] w-0 z-10 text-[17px] rounded-[3px] align-middle outline-none " +
              "focus:bg-white focus:shadow-lg"
            }
            style={{ appearance: "textfield" }}
            onFocus={() => setSearchOnFocus(true)}
            onBlur={() => setSearchOnFocus(false)}
          />
          <button className="border-none bg-none rounded-tr-[6px] rounded-br-[6px] flex items-center justify-center px-[14px] cursor-pointer z-10 text-[#5e5e5e]">
            <GoSearch size={20} />
          </button>
        </div>

        {/* Searchbar dropdown */}
        {searchOnFocus && <SearchBarDropdown />}
      </form>
    </div>
  );
}

export default SearchBar;

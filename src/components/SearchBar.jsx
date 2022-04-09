import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import filterInput from "../utilities/filterInput";
import SearchBarDropdown from "./SearchBarDropdown/SearchBarDropdown";

// This component is being used in like two places so the props are for better responsiveness
function SearchBar({ show }) {
  const [searchOnFocus, setSearchOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleBlur(e) {
    // if the blur was because of outside focus
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSearchOnFocus(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchOnFocus(false);
    const filteredInput = filterInput(inputValue);
    window.location.href = `#/search/${filteredInput}`;
  }
  return (
    // main
    <div className={"w-full max-w-[750px] " + (show ? "visible" : "invisible")}>
      {/* search bar */}
      <form
        className="relative z-10 "
        onFocus={() => setSearchOnFocus(true)}
        // onClick={() => setSearchOnFocus(true)}
        onBlur={(e) => handleBlur(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* search bar container */}
        <div
          className={
            "flex bg-white bg-opacity-95 border-none rounded-[6px] z-10 " +
            (searchOnFocus ? "shadow-lg bg-opacity-100" : "")
          }
        >
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
              "focus:bg-white "
            }
            style={{ appearance: "textfield" }}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className={
              "border-none bg-none rounded-tr-[6px] rounded-br-[6px] flex items-center " +
              "justify-center px-[14px] cursor-pointer z-10 "
            }
            onClick={(e) => handleSubmit(e)}
          >
            <GoSearch size={20} color={"#5e5e5e"} />
          </button>
        </div>

        {/* Searchbar dropdown */}
        {searchOnFocus && (
          <SearchBarDropdown handleFocus={() => setSearchOnFocus(false)} />
        )}
      </form>
    </div>
  );
}

export default SearchBar;

import React from "react";
import { GoSearch } from "react-icons/go";

// This component is being used in like two places so the props are for better responsiveness
function SearchBar({ show, placeholder, size }) {
  // return (
  //   <div
  //     className={
  //       "relative w-3/5 lg:w-1/2 lg:block " + (show ? "visible" : "invisible")
  //     }
  //   >
  //     <input
  //       type="text"
  //       id="email-adress-icon"
  //       className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm outline-none"
  //       placeholder="Search..."
  //     />
  //   </div>
  // );
  return (
    // main
    <div className={"w-full max-w-[750px]" + (show ? "visible" : "invisible")}>
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
              "md:py-[12.6px] md:px-[17.5px] w-0 z-10 text-[17px] rounded-[3px] align-middle outline-none "
            }
            style={{ appearance: "textfield" }}
          />
          <button className="border-none bg-none rounded-tr-[6px] rounded-br-[6px] flex items-center justify-center px-[14px] cursor-pointer z-10 text-[#5e5e5e]">
            <GoSearch size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

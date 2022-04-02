import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Home() {
  return (
    <main className="px-[14px] lg:px-7 m-auto max-w-[1440px] min-h-[1400px]">
      {/* title tabs */}
      <div className="flex justify-between items-center pt-[14px] pb-[7px]">
        <h3 className="block text-lg leading-[26px] font-semibold mt-0 mb-0 text-[#1a1a1a]">
          Free Stock Photos
        </h3>
        <div className="relative">
          <div
            className={
              "inline-flex relative items-center justify-center gap-2 cursor-pointer h-full py-[4.2px] " +
              "pl-[13px] text-sm font-semibold m-0 min-h-[32px] leading-6 text-[#1a1a1a] whitespace-nowrap " +
              "border border-transparent"
            }
          >
            <span className="leading-6 whitespace-nowrap">Trending</span>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownElements from "../components/DropdownElements";
import SmallTriangle from "../components/SmallTriangle";

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
            <div>
              {/* the below div is used because of the effect of hovering even directly above the 
                    dropdown so as to mantain the hover effect */}
              <div className="absolute bg-blue-900 h-10 w-40 top-5 right-0"></div>
              <SmallTriangle dropdown="explore" top={9} right={3} />

              <DropdownElements
                dropdown="trending"
                elements={["Trending", "New"]}
                top={9}
                right={20}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

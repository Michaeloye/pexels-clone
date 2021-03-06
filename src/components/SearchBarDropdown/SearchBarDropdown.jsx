import React from "react";
import SuggestionItem from "./SuggestionItem";
import TrendingTopic from "./TrendingTopic";

function SearchBarDropdown({ handleFocus }) {
  return (
    <div>
      <div
        className="block absolute bg-white left-0 right-0 pt-[10px] rounded-bl-[4px] rounded-br-[4px] overflow-y-auto "
        style={{
          top: "calc(100% - 10px)",
          maxHeight: "calc(100vh - 150px)",
          boxShadow:
            "rgba(0, 0, 0, 0.15) 0px 16px 22px -10px, rgba(0, 0, 0, 0.08) 0px 34px 55px 4px, rgba(0, 0, 0, 0.07) 0px 13px 66px 12px",
          zIndex: "-1",
        }}
      >
        <div className="">
          {/* suggestion */}
          <div className="py-[21px] px-[14px] border-b border-[#e8e8e8]">
            <span className="block text-[14px] leading-[18px] mt-0 text-[#1a1a1a] font-normal mb-[14px]">
              Suggestion
            </span>
            <div className="-mb-[14px]">
              {["flower", "background", "coding"].map((item) => (
                <SuggestionItem
                  key={item}
                  title={item}
                  handleFocus={handleFocus}
                />
              ))}
            </div>
          </div>
        </div>
        {/* trending topics */}
        <div className="py-[21px] px-[14px] border-b border-[#e8e8e8]">
          <span className="block text-[14px] leading-[18px] mt-0 text-[#1a1a1a] font-normal mb-[14px]">
            Suggestion
          </span>
          <div className="-mb-[14px]">
            {[
              "landscape",
              "sunset",
              "office",
              "business",
              "forest",
              "food",
              "book",
            ].map((topic) => (
              <TrendingTopic
                key={topic}
                topic={topic}
                handleFocus={handleFocus}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarDropdown;

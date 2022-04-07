import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

function SuggestionItem({ title }) {
  return (
    <Link className="bg-[#e8e8e8] inline-flex items-center whitespace-nowrap pb-[7px] pl-[19.6px] pt-[9.1px] pr-[14px] mb-[14px] rounded-[30px] no-underline">
      <span className="text-[14px] font-bold mt-0 inline-block text-[#1a1a1a] whitespace-nowrap mr-[9.1px] mb-[3.5px]">
        {title}
      </span>
      <GoSearch size={20} />
    </Link>
  );
}

export default SuggestionItem;

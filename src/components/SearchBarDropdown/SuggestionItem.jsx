import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

function SuggestionItem({ title }) {
  return (
    <Link
      to="/"
      className="bg-[#e8e8e8] inline-flex items-center whitespace-nowrap pb-[7px] pl-[19.6px] pt-[9.1px] pr-[14px] mb-[14px] rounded-[30px] no-underline mr-2"
    >
      <span className="text-[14px] font-bold mt-0 inline-block text-[#1a1a1a] whitespace-nowrap mr-[9.1px]">
        {title}
      </span>
      <GoSearch size={15} color="gray" />
    </Link>
  );
}

export default SuggestionItem;

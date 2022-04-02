import React from "react";
import SocialHandle from "./SocialHandle";
import { Link, useLocation } from "react-router-dom";

function DropdownElements({ dropdown, elements, top, right }) {
  if (dropdown === "explore") {
    return (
      <ul
        className={
          `absolute block list-none m-0 py-2 mt-0 mb-0 text-[#5e5e5e] bg-white shadow w-44 top-9 right-0 `
          // `top-${top} right-${right}`
        }
      >
        {elements.map((element) => (
          <li
            key={element}
            className="block text-base font-semibold hover:bg-gray-200 "
          >
            <a className="block w-full h-full text-left py-2 px-4 cursor-pointer hover:text-black">
              {element}
            </a>
          </li>
        ))}
      </ul>
    );
  } else if (dropdown === "...") {
    return (
      <>
        <ul
          className={
            `absolute block list-none m-0 py-2 mt-0 mb-0 text-[#5e5e5e] bg-white shadow w-[350px] top-8 ` +
            `top-${top} right-${right}`
          }
        >
          {elements.map((element) => (
            <li
              key={element}
              className="block text-base font-semibold hover:bg-gray-200 "
            >
              {/* The flex is because of the image to change language */}
              <a className="flex gap-1 w-full h-full text-left py-2 px-4 cursor-pointer hover:text-black">
                {element}{" "}
                {element == "Change Language" ? (
                  <img
                    width="36"
                    height="26"
                    src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png"
                  />
                ) : (
                  ""
                )}
              </a>
            </li>
          ))}
          {/* Social handles */}
          <div className="px-1 py-3">
            <div className="flex justify-center ">
              {/* the numbers being mapped through represents the number of icons */}
              {[0, 1, 2, 3, 4].map((num) => (
                <SocialHandle key={num} icon={num} />
              ))}
            </div>
          </div>
        </ul>
      </>
    );
  } else {
    // either 'trending' or 'new' has to be focused on based on the url pathname
    // the style will based on the pathname
    const location = useLocation().pathname;
    return (
      <ul
        className={
          `absolute block list-none m-0 py-2 mt-0 mb-0 text-[#5e5e5e] bg-white shadow w-40 top-9 right-2 `
          // `top-${top} right-${right}`
        }
      >
        {elements.map((element) => (
          <li
            key={element}
            className={
              "block text-base font-semibold hover:bg-gray-200 " +
              (element.toLowerCase() === "trending" && location.slice(1) === ""
                ? "bg-gray-200 "
                : "") +
              (element.toLowerCase() === location.slice(1) ? "bg-gray-200" : "")
            }
          >
            <Link
              to={element === "Trending" ? "" : `/${element.toLowerCase()}`}
              className={
                "block w-full h-full text-left py-2 px-4 cursor-pointer hover:text-[#1a1a1a] " +
                (element.toLowerCase() === "trending" &&
                location.slice(1) === ""
                  ? "text-[#1a1a1a] "
                  : "") +
                (element.toLowerCase() === location.slice(1)
                  ? "text-[#1a1a1a]"
                  : "")
              }
            >
              {element}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default DropdownElements;

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Tabs() {
  // the useLocation is used to get the current url pathname
  const location = useLocation().pathname;
  return (
    <div className="shadow block text-center overflow-x-auto whitespace-nowrap relative">
      {/* Map throught the different tab */}
      {["Home", "Discover", "Videos", "Leaderboard", "Challenges"].map(
        (element) => (
          <Link
            key={element}
            to={element === "Home" ? "" : `/${element.toLowerCase()}`}
            // select text color based on route
            className={
              "relative inline-flex text-[17px] leading-[26px] font-semibold mt-0 mb-0 hover:text-primary-blue " +
              "tracking-[0.4px] items-center p-[17.5px] cursor-pointer no-underline text-[#5e5e5e] " +
              (element.toLowerCase() === "home" && location.slice(1) === ""
                ? "text-primary-blue "
                : " ") +
              (element.toLowerCase() === location.slice(1)
                ? "text-primary-blue"
                : "")
            }
          >
            {element}
            {/* home has to be done for specially because it has a route of '/' */}
            {element.toLowerCase() === "home" && location.slice(1) === "" ? (
              <span className="absolute h-[3px] round-tl-sm rounded-tr-sm bottom-0 left-0 right-0 bg-primary-blue"></span>
            ) : (
              ""
            )}
            {/* location contains '/' at index 0 thus slice is necessary */}
            {element.toLowerCase() === location.slice(1) ? (
              <span className="absolute h-[3px] round-tl-sm rounded-tr-sm bottom-0 left-0 right-0 bg-primary-blue"></span>
            ) : (
              ""
            )}
          </Link>
        )
      )}
    </div>
  );
}

export default Tabs;

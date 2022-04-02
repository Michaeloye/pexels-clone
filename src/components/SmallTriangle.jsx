import React from "react";

// This represents the small triangle that comes out when a user hovers on explore on the navbar
function SmallTriangle({ dropdown, top, right }) {
  // The props are used to position the component
  if (dropdown === "explore") {
    return (
      <div
        className={
          "absolute w-[15px] h-[15px] bg-white rounded-sm top-8 right-5 "
        }
        style={{
          content: '""',
          WebkitTransform: "rotate(45deg)",
          transform: "rotate(45deg)",
          boxShadow: "-3px -3px 5px rgba(82,95,127,.04)",
        }}
      ></div>
    );
  } else if (dropdown === "...") {
    return (
      <div
        className={
          "absolute w-[15px] h-[15px] bg-white rounded-sm top-7 right-1 "
        }
        style={{
          content: '""',
          WebkitTransform: "rotate(45deg)",
          transform: "rotate(45deg)",
          boxShadow: "-3px -3px 5px rgba(82,95,127,.04)",
        }}
      ></div>
    );
  } else {
    return (
      <div
        className={
          "absolute w-[15px] h-[15px] bg-white rounded-sm top-8 right-9 "
        }
        style={{
          content: '""',
          WebkitTransform: "rotate(45deg)",
          transform: "rotate(45deg)",
          boxShadow: "-3px -3px 5px rgba(82,95,127,.04)",
        }}
      ></div>
    );
  }
}

export default SmallTriangle;

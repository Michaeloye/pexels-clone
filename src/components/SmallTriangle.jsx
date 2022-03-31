import React from "react";

// This represents the small triangle that comes out when a user hovers on explore on the navbar
function SmallTriangle({ top, right }) {
  // The props are used to position the component
  return (
    <div
      className={
        "absolute w-[15px] h-[15px] bg-white rounded-sm " +
        `top-[${top}] right-[${right}]`
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

export default SmallTriangle;

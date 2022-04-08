import React from "react";

export default function Backdrop({ children }) {
  return (
    <div
      className="fixed z-50 h-full w-full bg-white lg:bg-black lg:bg-opacity-80 flex justify-center items-center"
      style={{ top: "0", left: "0" }}
    >
      {children}
    </div>
  );
}

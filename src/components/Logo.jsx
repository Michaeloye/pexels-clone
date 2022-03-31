import React from "react";

function Logo() {
  return (
    <div
      style={{
        // display: "-webkit-box",
        display: "flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="border-8 h-[40px] w-[40px]"
      >
        <path
          fill="#05A081"
          d="M2 0h28a2 2 0 012 2v28a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"
        ></path>
        <path
          fill="#fff"
          d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 100-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 01.833 10.18V23z"
        ></path>
      </svg>
    </div>
  );
}

export default Logo;

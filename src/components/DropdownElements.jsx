import React from "react";

function DropdownElements({ elements, top, right }) {
  return (
    <ul
      className={
        "absolute block list-none m-0 py-2 mt-0 mb-0 text-[#5e5e5e] bg-white shadow w-44 right-0 top-10 " +
        `top-[${top}] right-['${right}']`
      }
    >
      {elements.map((element) => (
        <li key={element} className="block text-base font-semibold">
          <a className="block w-full h-full text-left py-2 px-4 cursor-pointer">
            {element}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DropdownElements;

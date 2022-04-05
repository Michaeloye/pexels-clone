import React from "react";

function MobileNavListItem({ title, sm }) {
  return (
    <li
      className={
        "block relative mt-0 mb-[9.8px] px-[14px] " +
        (sm ? "text-[20px] font-light" : "text-[22px] font-normal")
      }
      style={{ lineHeight: "1.2" }}
    >
      <a className="flex items-center gap-3 no-underline w-full opacity-70">
        {title}{" "}
        {title == "Change Language" ? (
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
  );
}

export default MobileNavListItem;

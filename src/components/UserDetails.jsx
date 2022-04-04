import React from "react";
import avatar from "../assets/avatar.svg";
function UserDetails({ pageURL, userImageURL, userName }) {
  return (
    <a
      href={pageURL}
      className="absolute bottom-0 left-0 pb-4 pl-4 no-underline text-white whitespace-nowrap cursor-pointer transition-opacity duration-200 delay-200 z-20"
      style={{ maxWidth: "calc(100% - 70px)" }}
    >
      {/* if the userImageURL returned from the api is empty a default avatar image is used */}
      <img
        src={userImageURL === "" ? avatar : userImageURL}
        height={30}
        width={30}
        className="inline-flex align-middle rounded-[50%] z-20 max-w-full cursor-pointer"
      />
      <span
        className="box-content text-sm whitespace-nowrap mr-10 ml-1 inline-block align-middle overflow-ellipsis overflow-hidden text-[#e8e8e8] "
        style={{ maxWidth: "calc(100% - 40px)" }}
      >
        {userName}
      </span>
    </a>
  );
}

export default UserDetails;

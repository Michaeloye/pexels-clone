import React, { useState } from "react";
import avatar from "../assets/avatar.svg";
import SmallTriangle from "./SmallTriangle";
import UserDropdown from "./UserDropdown";
function UserDetails({ pageURL, userImageURL, userName }) {
  const [onHover, setOnHover] = useState(false);
  const [mediumScreen, setMediumScreen] = useState("");
  const { width } = useScreensize();

  function handleHover(state) {
    setOnHover(state);
  }

  useEffect(() => {
    if (width >= 765) {
      setMediumScreen(true);
    } else {
      setMediumScreen(false);
    }
    return () => {
      null;
    };
  }, [width]);

  // from medium screens upward the user details are to be displayed
  return (
    mediumScreen && (
      <a
        href={pageURL}
        className="absolute bottom-0 left-0 pb-4 pl-4 no-underline text-white whitespace-nowrap cursor-pointer transition-opacity duration-200 delay-200 z-20"
        style={{ maxWidth: "calc(100% - 70px)" }}
        onMouseOver={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {/* if the userImageURL returned from the api is empty a default avatar image is used */}
        <div className="relative inline-flex align-middle">
          <img
            src={userImageURL === "" ? avatar : userImageURL}
            height={30}
            width={30}
            className="inline-flex align-middle rounded-full z-20 max-w-full cursor-pointer"
          />
          {onHover && (
            <>
              <div className="absolute bg-transparent h-10 w-60 -top-5 -right-24"></div>

              <SmallTriangle top={35} right={7} />
              <UserDropdown />
            </>
          )}
        </div>
        <span
          className="box-content text-sm whitespace-nowrap mr-10 ml-1 inline-block align-middle overflow-ellipsis overflow-hidden text-[#e8e8e8] "
          style={{ maxWidth: "calc(100% - 40px)" }}
        >
          {userName}
        </span>
      </a>
    )
  );
}

export default UserDetails;

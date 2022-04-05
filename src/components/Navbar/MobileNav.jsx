import React from "react";
import SocialHandle from "../SocialHandle";
import MobileNavListItem from "./MobileNavListItem";

function MobileNav() {
  return (
    <div
      className={
        "block fixed bg-primary-black text-white top-[66px] left-0 right-0 bottom-0 " +
        "pt-[31.5px] pb-[14px] overflow-y-auto z-40 overflow-x-hidden"
      }
    >
      {/* Home */}
      <ul className="list-none p-0 m-0">
        <MobileNavListItem title={"Home"} />
      </ul>
      <hr className="bg-white my-[24.5px] mx-[14px] h-[1px] border-none opacity-30" />

      {/* discover and others */}
      <ul className="list-none p-0 m-0">
        {[
          "Discover Photos",
          "Popular Searches",
          "Free Videos",
          "Challenges",
          "Leaderboard",
          "Pexels Blog",
        ].map((title) => (
          <MobileNavListItem key={title} title={title} />
        ))}
      </ul>

      <hr className="bg-white my-[24.5px] mx-[14px] h-[1px] border-none opacity-30" />

      {/* login and others */}
      <ul className="list-none p-0 m-0">
        {["Login", "Join", "Change Language", "License"].map((title) => (
          <MobileNavListItem key={title} title={title} sm={true} />
        ))}
      </ul>

      <hr className="bg-white my-[24.5px] mx-[14px] h-[1px] border-none opacity-30" />

      {/* About and others */}
      <ul className="list-none p-0 m-0">
        {["Apps And Ps Plugin", "FAQ", "About Us", "Imprint & Terms"].map(
          (title) => (
            <MobileNavListItem key={title} title={title} sm={true} />
          )
        )}
      </ul>

      <hr className="bg-white my-[24.5px] h-[1px] border-none opacity-30" />

      {/* socials */}
      <ul className="grid list-none m-0 p-0 grid-cols-5">
        {[0, 1, 2, 3, 4].map((iconNum) => (
          <SocialHandle key={iconNum} icon={iconNum} mobile={true} />
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;

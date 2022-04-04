import React from "react";
import SmallTriangle from "./SmallTriangle";
import SpotlighCardProfile from "./SpotlightCard/SpolightCardProfile";
import SpotlightCardPhoto from "./SpotlightCard/SpotlightCardPhoto";
import SpotlightCardFooterItem from "./SpotlightCard/SpotlightCardFooterItem";

function UserDropdown() {
  return (
    <div className="absolute block min-w-[175px] z-20 bottom-20">
      <div className="relative w-full h-full mt-2 bg-white rounded-sm shadow-sm text-left">
        <SmallTriangle />
        <div className="relative h-full w-full p-[14px] ">
          <div>
            <div className="w-80">
              <article className="w-full ">
                {/* spotlight card header */}
                <div className="flex justify-between items-center max-w-full mb-[14px]">
                  {/* profile */}
                  <SpotlighCardProfile
                    userImageURL=""
                    userName="asdfas"
                    followers="234"
                  />
                  {/* Follow */}
                  <div className="ml-[14px]">
                    <button
                      className={
                        "relative inline-flex text-white border-primary-green bg-primary-green leading-[1] " +
                        "items-center justify-center border-[1px] rounded cursor-pointer font-semibold text-center " +
                        "no-underline whitespace-nowrap py-[11px] px-6 "
                      }
                      style={{ boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)" }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
                {/* spotlight card photos */}
                <div className="flex mb-4">
                  {/* three images are needed thus map 3 items */}
                  {[0, 1, 2].map((photo) => (
                    <SpotlightCardPhoto
                      key={photo}
                      imageURL={
                        "https://images.pexels.com/photos/10251435/pexels-photo-10251435.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                      }
                      last={photo === 2 ? true : false}
                    />
                  ))}
                </div>
                {/* spotlight card footer */}
                <div className="flex">
                  {[0, 1, 2].map((num) => (
                    <SpotlightCardFooterItem key={num} icon={num} text={234} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDropdown;

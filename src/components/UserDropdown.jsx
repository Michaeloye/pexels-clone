import React, { useState, useEffect, useRef, useContext } from "react";
import SpotlighCardProfile from "./SpotlightCard/SpolightCardProfile";
import SpotlightCardPhoto from "./SpotlightCard/SpotlightCardPhoto";
import SpotlightCardFooterItem from "./SpotlightCard/SpotlightCardFooterItem";
import { UserContext } from "./PhotoColumn/PhotoColumn";

function UserDropdown() {
  // becaus this component is nested deeply useContext is used for easier passsing down of data
  // user = {views, likes, downloads, userName, userImageURL}
  const user = useContext(UserContext);

  // For the purpose of responsiveness the spotlight profile card is observed to change position
  // when offscreen, so the spotlightCardRef comes inhandy to know when it is offscreen
  const spotlightCardRef = useRef(null);
  const [inDisplayX, setInDisplayX] = useState();

  useEffect(() => {
    console.log(user);
    // to determine how offscreen the card is
    let elem = spotlightCardRef.current;
    let rect = elem.getBoundingClientRect();
    if (rect.x <= 75) {
      setInDisplayX(false);
    } else {
      setInDisplayX(true);
    }
  }, [inDisplayX]);
  return (
    <div
      ref={spotlightCardRef}
      className="absolute block min-w-[175px] z-20 top-[-215px] right-0 delay-[5000]"
      // custom style based on being offscreen or not
      style={
        !inDisplayX
          ? {
              right: `-320px`,
            }
          : {}
      }
    >
      <div className="relative w-full h-full mt-2 bg-white rounded-sm shadow-sm text-left">
        <div className="relative h-full w-full p-[14px] ">
          <div>
            <div className="w-80">
              <article className="w-full ">
                {/* spotlight card header */}
                <div className="flex justify-between items-center max-w-full mb-[14px]">
                  {/* profile */}
                  <SpotlighCardProfile
                    userImageURL={user.userImageURL}
                    userName={user.userName}
                    followers={"???"}
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
                  {[user.views, user.downloads, user.likes].map(
                    (data, index) => (
                      <SpotlightCardFooterItem
                        key={data}
                        icon={index}
                        num={data}
                      />
                    )
                  )}
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

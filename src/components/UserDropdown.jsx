import React from "react";
import SmallTriangle from "./SmallTriangle";

function UserDropdown() {
  return (
    <div className="absolute block min-w-[175px] z-20">
      <div className="relative w-full h-full mt-2 bg-white rounded-sm shadow-sm text-left">
        {/* 
          equivalent to small triangle
        <div
          className="absolute left-[7.5px] right-auto shadow z-20 w-4 h-4 bg-white rounded-sm"
          style={{ top: "calc(-7.5px + 100%)", transform: "rotate(45deg)" }}
        ></div> */}
        <SmallTriangle />
        <div className="relative h-full w-full p-[14px] ">
          <div>
            <div className="w-80">
              <article className="w-full ">
                <div className="flex justify-between items-center max-w-full mb-[14px]">
                  <a className="max-w-full overflow-hidden flex items-center no-underline"></a>
                  {/* Follow */}
                  <div className="ml-[14px]">
                    <button
                      className={
                        "relative inline-flex text-white border-primary-green leading-[1px] " +
                        "items-center justify-center border-[1px] rounded cursor-pointer font-semibold text-center " +
                        "no-underline whitespace-nowrap py-3 px-6"
                      }
                      style={{ boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)" }}
                    >
                      Follow
                    </button>
                  </div>
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

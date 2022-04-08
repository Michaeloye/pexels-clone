import React from "react";
import Backdrop from "../Backdrop";
import { IoMdClose, IoMdAddCircleOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { IoCheckmarkCircle } from "react-icons/io5";
import avatar from "../../assets/avatar.svg";
import numFormatter from "../../utilities/numFormatter";

export default function MobileModal({
  handleClose,
  image,
  pageURL,
  likes,
  userImageURL,
  userName,
  views,
}) {
  return (
    <Backdrop>
      {/* modal navbar */}
      <div
        className="block fixed top-0 left-0 right-0 h-[50px] bg-white z-50 px-4 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between h-full w-full">
          <IoMdClose
            color={"black"}
            size={40}
            onClick={() => handleClose(false)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* modal overlay  */}
      <div className="flex">
        {/* modal content */}
        <div className="m-0 p-0 top-[50px] w-full">
          {/* photo page */}
          <div className="flex flex-col pb-[24.5px] m-0">
            {/* photo section */}
            <section className="relative mb-4 p-0">
              <div>
                <a href={pageURL} className="cursor-pointer">
                  <div className="flex justify-center">
                    <img
                      className="h-full w-full bg-[#6d6b78] max-h-full min-h-0 max-w-full min-w-0"
                      src={image}
                    />
                  </div>
                </a>
              </div>
            </section>

            {/* button group likes, colloect,free download */}
            <section className="relative px-4 mb-4 ">
              <div className="flex items-stretch flex-wrap w-full ml-0 mb-[8.4px] ">
                {/* like button */}
                <div
                  className={
                    "relative inline-flex items-center justify-center gap-1 bg-white text-[#1a1a1a] " +
                    "border rounded-[3px] border-[#1a1a1a26] cursor-pointer font-semibold text-center " +
                    "whitespace-nowrap py-[11px] px-6 shadow "
                  }
                  style={{
                    width: "calc(50% - 8.05px)",
                    marginLeft: "0",
                    marginRight: "8.05px",
                  }}
                >
                  <FiHeart color={"#1a1a1a"} size={14} />
                  <span className="text-[16px] font-semibold cursor-pointer text-center text-[#1a1a1a] my-0">
                    {likes} likes
                  </span>
                </div>
                {/* collect button */}
                <div
                  className={
                    "relative inline-flex items-center justify-center gap-1 bg-white text-[#1a1a1a] " +
                    "border rounded-[3px] border-[#1a1a1a26] cursor-pointer font-semibold text-center " +
                    "whitespace-nowrap py-[11px] px-6 shadow "
                  }
                  style={{
                    width: "calc(50% - 8.05px)",
                    marginRight: "0!important",
                    marginLeft: "8.05px!important",
                  }}
                >
                  <IoMdAddCircleOutline color={"#1a1a1a"} size={14} />
                  <span className="text-[16px] font-semibold cursor-pointer text-center text-[#1a1a1a] my-0">
                    Collect
                  </span>
                </div>
                {/* free download */}
                <div className="w-full mt-4">
                  <div className="flex items-stretch shadow">
                    <a
                      href={pageURL}
                      className={
                        "relative inline-flex items-center justify-center bg-[#05a081] text-[white] " +
                        "border rounded-tl-[3px] rounded-bl-[3px] w-full border-[#05a081] cursor-pointer font-semibold text-center " +
                        "whitespace-nowrap py-[8.4px] px-[25px] no-underline"
                      }
                    >
                      {" "}
                      <span className="whitespace-nowrap">Free Download</span>
                    </a>
                    <div className="relative ">
                      <div
                        className={
                          "relative inline-flex items-center justify-center bg-[#05a081] text-[white] " +
                          "border rounded-tr-[3px] rounded-br-[3px] w-full border-[#05a081] cursor-pointer font-semibold text-center " +
                          "whitespace-nowrap py-[8.4px] no-underline"
                        }
                      >
                        {" "}
                        <MdKeyboardArrowDown size={24} color={"white"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* user details section */}
            <section>
              <div className="w-11/12 max-w-[650px] m-auto">
                <div className="bg-white p-[8.4px] border border-[#1a1a1a26] rounded">
                  {/* user  */}
                  <div className="mb-4">
                    <div className="flex items-center mr-5">
                      {/* profile pic */}
                      <div
                        className={
                          "flex items-center justify-center w-full h-full bg-white " +
                          "rounded-full mr-[10px] max-h-[52px] max-w-[52px] min-h-[52px] min-w-[52px] "
                        }
                      >
                        <img
                          src={userImageURL === "" ? avatar : userImageURL}
                          className="rounded-full object-fill h-auto min-w-full"
                        />
                      </div>
                      <div className="max-w-[150px] ">
                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-left my-0 font-semibold leading-[25px]">
                          {userName}
                        </h3>
                        <h4 className="whitespace-nowrap text-ellipsis overflow-hidden text-left my-0 font-light leading-[25px] ">
                          ??? followers
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* follow */}
                  <div className="flex stretch">
                    <button
                      className={
                        "relative inline-flex items-center justify-center text-[14px] font-semibold " +
                        "cursor-pointer whitespace-nowrap shadow border rounded-[3px] no-underline border-[#1a1a1a26] " +
                        "bg-white text-[#1a1a1a] py-[6px] px-[13px]"
                      }
                    >
                      Follow
                    </button>
                  </div>
                </div>

                {/* views and free to download */}
                <div className="flex flex-col items-start justify-center w-full gap-2">
                  {/* views */}
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <TiEye color={"#1a1a1a"} size={14} />
                    <p className="text-[14px] font-light text-[#1a1a1a] mt-[2px]">
                      {numFormatter(views)} views
                    </p>
                  </div>
                  {/* free to download */}
                  <div className="flex items-center justify-center gap-2">
                    <IoCheckmarkCircle color={"#1a1a1a"} size={14} />
                    <p className="text-[14px] font-light text-[#1a1a1a]">
                      Free to use
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

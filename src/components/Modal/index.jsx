import React from "react";
import Backdrop from "../Backdrop";
import { IoMdClose, IoMdAddCircleOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { IoCheckmarkCircle } from "react-icons/io5";
import avatar from "../../assets/avatar.svg";
import numFormatter from "../../utilities/numFormatter";

export default function Modal({
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
      <IoMdClose
        color={"white"}
        size={40}
        onClick={() => handleClose(false)}
        className="fixed cursor-pointer opacity-60 top-[16.1px] left-[16.1px]"
      />
      {/* main */}
      <div
        className="absolute max-w-[1200px] mb-[16.1px] mt-[32.2px] outline-none bg-white rounded-md p-[15px]"
        style={{ width: "calc(100vw - 160px)" }}
      >
        <div className="flex flex-col">
          <section className="relative p-0 mb-[35px]">
            <div className="flex items-center justify-between w-full">
              {/* user details and follow */}
              <div className=" flex w-full items-center">
                {/* user */}
                <div>
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
                <div className="flex">
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
              <div className="flex items-center justify-center ">
                <div className="flex items-center ml-[8.4px] gap-2">
                  <div
                    className={
                      "relative inline-flex items-center justify-center gap-1 bg-white text-[#1a1a1a] " +
                      "border rounded-[3px] border-[#1a1a1a26] cursor-pointer font-semibold text-center " +
                      "whitespace-nowrap py-[8.6px] px-6 shadow h-full "
                    }
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
                      "whitespace-nowrap py-[8.4px] px-6 shadow h-full"
                    }
                  >
                    <IoMdAddCircleOutline color={"#1a1a1a"} size={14} />
                    <span className="text-[16px] font-semibold cursor-pointer text-center text-[#1a1a1a] my-0">
                      Collect
                    </span>
                  </div>
                  {/* free download */}
                  <div className="w-full ">
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
              </div>
            </div>
            {/* likes, collect, download */}
          </section>

          {/* image  */}
          <section className="relative mb-[24.5px] px-[5px] ">
            <div>
              <div className="flex justify-center cursor-zoom-in ">
                <img
                  className="w-auto h-full bg-gray-600 max-h-[75vh]"
                  src={image}
                />
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <IoCheckmarkCircle color={"#1a1a1a"} size={14} />
              <p className="text-[14px] font-light text-[#1a1a1a]">
                Free to use
              </p>
            </div>
          </section>
        </div>
      </div>
    </Backdrop>
  );
}

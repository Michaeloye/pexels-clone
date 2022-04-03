import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import UserDetails from "./UserDetails";

function Photo({ imageURL }) {
  const [onImageHover, setOnImageHover] = useState(false);
  function handleImageHover(state) {
    setOnImageHover(state);
  }
  return (
    <div className="mb-[14px] md:mb-[20.3px] cursor-pointer">
      <article
        className="photo-item-overlay relative block z-0 before:opacity-30 md:before:opacity-0 md:before:hover:opacity-100 "
        onMouseOver={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
      >
        <a className="bg-[rgb(198,198,198)]">
          <img
            src={imageURL}
            className="block w-full max-w-full h-auto border-0"
          />
        </a>
        {/* poster details */}
        {onImageHover && (
          <>
            <UserDetails />
            {/* download like others */}
            <div className="absolute flex bottom-0 right-0 pr-4 pb-4">
              <a className="opacity-80 w-10 delay-100 overflow-hidden z-20 p-0 cursor-pointer">
                <HiDownload size={24} color={"white"} />
              </a>
              <button className="hidden md:block opacity-80 w-10 delay-100 overflow-hidden z-20 p-0">
                <IoMdAddCircleOutline size={24} color={"white"} />
              </button>
              <button className="hidden md:block opacity-80 w-10 delay-100 overflow-hidden z-20 p-0">
                <FiHeart size={24} color={"white"} />
              </button>
            </div>
          </>
        )}
      </article>
    </div>
  );
}

export default Photo;

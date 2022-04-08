import React, { useState, useEffect, useContext } from "react";
import { HiDownload } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import UserDetails from "./UserDetails";
import { Img } from "react-image";
import ImageModal from "../components/Modal/index";
import MobileModal from "./Modal/MobileModal";
import { UserContext } from "./PhotoColumn/PhotoColumn";
import useScreensize from "../hooks/useScreensize";

function Photo({ pageURL, imageURL, userImageURL, userName }) {
  const user = useContext(UserContext);
  const [onImageHover, setOnImageHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mediumScreen, setMediumScreen] = useState("");
  const { width } = useScreensize();

  useEffect(() => {
    if (width < 1023) {
      setMediumScreen(true);
    } else {
      setMediumScreen(false);
    }
    return () => {
      null;
    };
  }, [width]);
  const handleModal = (state) => {
    setModalOpen(state);
  };

  function handleImageHover(state) {
    setOnImageHover(state);
  }
  return (
    <div className="mb-[14px] md:mb-[20.3px] cursor-pointer">
      {mediumScreen
        ? modalOpen && (
            <MobileModal
              handleClose={handleModal}
              image={imageURL}
              pageURL={pageURL}
              likes={user.likes}
              userImageURL={userImageURL}
              userName={userName}
              views={user.views}
            />
          )
        : modalOpen && (
            <ImageModal
              handleClose={handleModal}
              image={imageURL}
              pageURL={pageURL}
              likes={user.likes}
              userImageURL={userImageURL}
              userName={userName}
              views={user.views}
            />
          )}
      <article
        className="photo-item-overlay relative block z-0 before:opacity-30 md:before:opacity-0 md:before:hover:opacity-100 "
        onMouseOver={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
      >
        {/* <a href={pageURL} className="bg-[rgb(198,198,198)] h-12 max-h-fit"> */}
        {/* Img from react-image is an optimized image tag that helps in rendering images
         */}
        <Img
          src={imageURL}
          loader={<div className="h-40 md:h-64 w-full bg-gray-900"></div>}
          className="block w-full max-w-full h-auto border-0"
          onClick={() => handleModal(true)}
        />
        {/* </a> */}
        {/* poster details */}
        {onImageHover && (
          <>
            <UserDetails
              pageURL={pageURL}
              userImageURL={userImageURL}
              userName={userName}
            />
            {/* download like others */}
            <div className="absolute flex bottom-0 right-0 pr-4 pb-4">
              <a
                className="opacity-80 w-10 delay-100 overflow-hidden z-20 p-0 cursor-pointer"
                href={pageURL}
              >
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

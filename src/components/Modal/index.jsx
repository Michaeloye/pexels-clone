import React from "react";
import Backdrop from "../Backdrop";
import { IoMdClose } from "react-icons/io";

export default function Modal({ handleClose, image }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-full w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          color={"white"}
          size={25}
          onClick={() => handleClose(false)}
          className="absolute cursor-pointer"
          style={{ top: "5%", right: "10%" }}
        />
        <img
          src={image}
          alt="image-of-product"
          className="w-auto"
          style={{ maxHeight: "90vh" }}
        />
      </div>
    </Backdrop>
  );
}

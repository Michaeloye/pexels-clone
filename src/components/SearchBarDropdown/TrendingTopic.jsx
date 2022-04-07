import React, { useState, useEffect } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

function TrendingTopic({ topic }) {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  return (
    <Link
      className="inline-flex mb-[14px] mr-[14px] text-[15px] leading-[25px] font-bold items-center text-[#5e5e5e] bg-white rounded-[20px] pr-[26px] p-[5.6px] no-underline "
      style={{
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 3px 5px 0px",
        transition: "all 0.1s ease 0s",
      }}
    >
      {/* Img from react-image is an optimized image tag that helps in rendering images,
          unloader prop is a fallback, that displays if src image causes an error*/}
      <Img
        width={50}
        height={50}
        className="w-[50px] h-[50px] mr-[14px] bg-cover bg-center rounded-full"
        src={imageURL}
        unloader={
          <div className="h-[50px] w-[50px] bg-gray-900 rounded-full"></div>
        }
      />
      <span>{topic}</span>
    </Link>
  );
}

export default TrendingTopic;

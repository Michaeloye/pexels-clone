import axios from "axios";
import React, { useState, useEffect } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import filterInput from "../../utilities/filterInput";

function TrendingTopic({ topic }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const filteredTopic = filterInput(topic);
    axios
      .get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APIKEY
        }&image_type=photo&safesearch=true&q=${filteredTopic}`
      )
      .then((res) => setImageURL(res.data.hits[2]["previewURL"]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      className="inline-flex mb-[14px] mr-[14px] text-[15px] leading-[25px] font-bold items-center text-[#5e5e5e] bg-white rounded-[20px] pr-[26px] p-[5.6px] no-underline hover:bg-[#e8e8e8]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 3px 5px 0px",
        transition: "all 0.1s ease 0s",
      }}
      to={`/search/${topic}`}
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

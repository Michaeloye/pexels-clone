import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";

function TopSection() {
  const [bgImageURL, setBgImageURL] = useState();
  const [bgUser, setBgUser] = useState("");
  const [bgUserPageURL, setBgUserPageURL] = useState("");

  // function to get a random item from an array. it is required to show different background images
  // so from the response of the api a random image is selected
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  useEffect(() => {
    // The queris for the api are:
    // image_type=photo
    // category=backgrounds
    axios
      .get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APIKEY
        }&image_type=photo&category=backgrounds`
      )
      .then((res) => {
        const data = getRandomItem(res.data.hits);
        setBgImageURL(data["largeImageURL"]);
        setBgUser(data["user"]);
        setBgUserPageURL(data["pageURL"]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      className={
        "top-section-bg relative flex items-center justify-center h-full min-h-[500px] max-h-[500px] px-4 pt-[74px] pb-[66px] text-white bg-[#d3d3d3] z-10"
      }
      // before:content-none before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.2)] before:to-[rgba(0,0,0,0.2)] before:z-20
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
        <img
          src={bgImageURL}
          className="w-full h-full object-cover bg-[#232a34]"
          loading="lazy"
        />
      </div>
      {/* text and search */}
      <div className="w-full max-w-[650px] z-30">
        <h1 className="block w-full text-4xl leading-[48px] font-bold mb-4 text-left">
          The best free stock photos, royalty free images &amp; videos shared by
          creators.
        </h1>
        {/* search and suggested */}
        <div>
          <SearchBar show={true} />
          {/* suggested */}
          <div className="flex justify-between items-center">
            <ul className="flex relative items-center list-none whitespace-nowrap w-full m-0 py-2 px-0">
              <li className="text-sm hidden lg:inline-block ">
                Suggested <span>:</span>
              </li>
              <li className="inline-block overflow-x-auto">
                <ul>
                  {[
                    "space",
                    "green",
                    "sunlight",
                    "moon",
                    "beach",
                    "travel",
                    "more",
                  ].map((topic) => (
                    <li
                      key={topic}
                      className={
                        "text-sm leading-[18px] font-light inline-block opacity-80 " +
                        (topic === "space" ? "ml-0 lg:ml-2" : "ml-0")
                      }
                    >
                      {topic}
                      <span className={topic === "more" ? "hidden" : "mr-1"}>
                        ,
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        href={bgUserPageURL}
        className="absolute text-xs hidden lg:inline-block lg:bottom-4 lg:right-5 lg:cursor-pointer lg:opacity-50 hover:opacity-100 z-30"
      >
        <span>Photo by {bgUser}</span>
      </a>
    </section>
  );
}

export default TopSection;

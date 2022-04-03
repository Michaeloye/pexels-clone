import React, { useState, useEffect } from "react";
import TitleTabs from "../components/TitleTabs";
import PhotoColumn from "../components/PhotoColumn/PhotoColumn";
import useScreensize from "../hooks/useScreensize";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [onHover, setOnHover] = useState(false);
  const [mediumScreen, setMediumScreen] = useState("");
  // for the purpose of responsiveness the width of the page has to be accessed so as determine the...
  // number of photo columns to display for <=1024 2 photo columns are to be displayed else 3 photo columns
  const { width } = useScreensize();

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APIKEY
        }&q=yellow+flowers&image_type=photo&pretty=true`
      )
      .then((res) => setData(res.data["hits"]))
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (width <= 1024) {
      setMediumScreen(true);
    } else {
      setMediumScreen(false);
    }
    return () => {
      null;
    };
  }, [width]);

  return (
    <main className="px-[14px] lg:px-7 m-auto max-w-[1440px] min-h-[1400px]">
      {/* title tabs */}
      <TitleTabs />
      {/* images */}
      <div className="relative flex w-full">
        {/* 2 photo columns for medium screen 3 photo columns for large screen */}
        {mediumScreen ? (
          <>
            <PhotoColumn images={data.slice(0, 5)} />
            <PhotoColumn images={data.slice(5, 10)} last />
          </>
        ) : (
          <>
            <PhotoColumn images={data.slice(0, 5)} />
            <PhotoColumn images={data.slice(5, 10)} />
            <PhotoColumn images={data.slice(10, 15)} last />
          </>
        )}
      </div>
    </main>
  );
}

export default Home;

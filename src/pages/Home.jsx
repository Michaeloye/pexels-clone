import React, { useState, useEffect } from "react";
import TitleTabs from "../components/TitleTabs";
import PhotoColumn from "../components/PhotoColumn/PhotoColumn";
import useScreensize from "../hooks/useScreensize";

function Home() {
  const [onHover, setOnHover] = useState(false);
  const [mediumScreen, setMediumScreen] = useState("");
  // for the purpose of responsiveness the width of the page has to be accessed so as determine the...
  // number of photo columns to display for <=1024 2 photo columns are to be displayed else 3 photo columns
  const { width } = useScreensize();

  function handleHover(state) {
    setOnHover(state);
  }

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
            <PhotoColumn />
            <PhotoColumn last />
          </>
        ) : (
          <>
            <PhotoColumn />
            <PhotoColumn />
            <PhotoColumn last />
          </>
        )}
      </div>
    </main>
  );
}

export default Home;

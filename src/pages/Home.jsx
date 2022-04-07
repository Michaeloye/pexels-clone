import React, { useState, useEffect, useRef } from "react";
import TitleTabs from "../components/TitleTabs";
import PhotoColumn from "../components/PhotoColumn/PhotoColumn";
import useScreensize from "../hooks/useScreensize";
import axios from "axios";
import slice from "../utilities/slice";
import range from "../utilities/range";
import useScroll from "../hooks/useScroll";
import { nanoid } from "nanoid";

function Home() {
  const mainRef = useRef(null);

  const [page, setPage] = useState(1);
  const [pageListNum, setPageListNum] = useState([]);
  const [data, setData] = useState({
    data1: [],
  });
  const [mediumScreen, setMediumScreen] = useState("");
  // for the purpose of responsiveness the width of the page has to be accessed so as determine the...
  // number of photo columns to display for <=1024 2 photo columns are to be displayed else 3 photo columns
  const { width, height } = useScreensize();
  // set page counter that adds one when user gets to bottom so map through pages
  const { scrollYPosition } = useScroll();

  useEffect(() => {
    // to determine how offscreen the card is
    let elem = mainRef.current;
    let rect = elem.getBoundingClientRect();
    // console.log(scrollY, rect.y, rect.bottom - 150, height);
    // because measurements are taken from top negating the values is necessary for proper result
    if (-rect.bottom >= -height - 250 && -rect.bottom <= -height) {
      setPage((prevState) => prevState + 1);
      // console.log("hello");
    } else {
      // console.log("hnla");
    }
  }, [scrollYPosition]);

  // for fetching data when page num changes
  useEffect(() => {
    setPageListNum(range(1, page));
    console.log(page);
    axios
      .get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APIKEY
        }&image_type=photo&safesearch=true&page=${page}`
      )
      .then((res) => {
        // the object in the setData represents this:
        // if 5 data list is hard coded in data state once is page gets to add 6 it throws an
        // error regarding assigning to null but with the below code
        // it destructures original data assigns current page data adds data ahead as empty object
        // e.g {...data, data1=[a,b,c]; data2=[]}
        setData({
          ...data,
          [`data${page}`]: res.data["hits"],
          [`data${page + 1}`]: [],
        });
      })
      .catch((err) => console.log(err.message));
  }, [page]);

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
    <main
      className="px-[14px] lg:px-7 m-auto max-w-[1440px] min-h-[1400px]"
      ref={mainRef}
    >
      {/* title tabs */}
      <TitleTabs />
      {/* images */}
      <div className="relative flex w-full">
        {/* 2 photo columns for medium screen 3 photo columns for large screen */}
        {mediumScreen ? (
          <>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={
                    data[`data${datum}`] === undefined ||
                    data[`data${datum}`] === null
                      ? ""
                      : slice(data[`data${datum}`], 0, 20, 2)
                  }
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={
                    data[`data${datum}`] === undefined ||
                    data[`data${datum}`] === null
                      ? ""
                      : slice(data[`data${datum}`], 1, 20, 2)
                  }
                  last
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* each time a new page is added the new photoColumn is appended */}
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={
                    data[`data${datum}`] === undefined ||
                    data[`data${datum}`] === null
                      ? ""
                      : slice(data[`data${datum}`], 0, 20, 2)
                  }
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={
                    data[`data${datum}`] === undefined ||
                    data[`data${datum}`] === null
                      ? ""
                      : slice(data[`data${datum}`], 1, 20, 2)
                  }
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={
                    data[`data${datum}`] === undefined ||
                    data[`data${datum}`] === null
                      ? ""
                      : slice(data[`data${datum}`], 2, 20, 2)
                  }
                  last
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;

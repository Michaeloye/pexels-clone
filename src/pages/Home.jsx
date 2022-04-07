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
    data2: [],
    data3: [],
    data4: [],
    data5: [],
  });
  // const [data2, setData2] = useState([]);
  // const [data3, setData3] = useState([]);
  // const [data4, setData4] = useState([]);
  // const [data5, setData5] = useState([]);
  const [mediumScreen, setMediumScreen] = useState("");
  // for the purpose of responsiveness the width of the page has to be accessed so as determine the...
  // number of photo columns to display for <=1024 2 photo columns are to be displayed else 3 photo columns
  const { width, height } = useScreensize();
  // set page counter that adds one when user gets to bottom so map through pages
  const { scrollYPosition } = useScroll();

  // useEffect(() => {
  //   // to determine how offscreen the card is
  //   let elem = mainRef.current;
  //   let rect = elem.getBoundingClientRect();
  //   // console.log(scrollY, rect.y, rect.bottom - 150, height);
  //   // because measurements are taken from top negating the values is necessary for proper result
  //   if (-rect.bottom >= -height - 150 && -rect.bottom <= -height) {
  //     setPage((prevState) => prevState + 1);
  //     // console.log("hello");
  //   } else {
  //     // console.log("hnla");
  //   }
  // }, []);

  // useEffect(() => {
  //   // once scroll postion gets to this point the showSearchBar is set to true
  //   console.log(scrollYPosition, height);
  //   if (scrollYPosition === height - 10) {
  //     setPage((prevState) => prevState + 1);
  //   } else {
  //     null;
  //   }
  // }, [scrollYPosition]);

  // useEffect(() => {
  //   setPageListNum(range(1, page));
  //   axios
  //     .get(
  //       `https://pixabay.com/api/?key=${
  //         import.meta.env.VITE_APIKEY
  //       }&image_type=photo&safesearch=true&page=${page}`
  //     )
  //     .then((res) => {
  //       setData({ ...data, [`data${page}`]: res.data["hits"] });
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, [page]);

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
  function asdf() {
    setPage((prevState) => prevState + 1);
    setPageListNum(range(1, page));
    axios
      .get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APIKEY
        }&image_type=photo&safesearch=true&page=${page}`
      )
      .then((res) => {
        setData({ ...data, [`data${page}`]: res.data["hits"] });
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <main
      className="px-[14px] lg:px-7 m-auto max-w-[1440px] min-h-[1400px]"
      ref={mainRef}
    >
      {/* title tabs */}
      <TitleTabs />
      <button onClick={() => asdf()}>click</button>
      {/* images */}
      <div className="relative flex w-full">
        {/* 2 photo columns for medium screen 3 photo columns for large screen */}
        {mediumScreen ? (
          <>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={slice(data[`data${datum}`], 0, 20, 2)}
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={slice(data[`data${datum}`], 1, 20, 2)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={slice(data[`data${datum}`], 0, 20, 3)}
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={slice(data[`data${datum}`], 1, 20, 3)}
                />
              ))}
            </div>
            <div className="flex flex-col">
              {pageListNum.map((datum) => (
                <PhotoColumn
                  key={nanoid()}
                  images={slice(data[`data${datum}`], 2, 20, 3)}
                />
              ))}
            </div>
            {/* <PhotoColumn images={slice(data1, 1, 20, 3)} />
            <PhotoColumn images={slice(data1, 2, 20, 3)} last /> */}
          </>
        )}
      </div>
    </main>
  );
}

export default Home;

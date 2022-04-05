import { useState, useEffect } from "react";
import JoinButton from "../JoinButton";
import LogoComplete from "../LogoComplete";
import SearchBar from "../SearchBar";
import { FaEllipsisH } from "react-icons/fa";
import SmallTriangle from "../SmallTriangle";
import DropdownElements from "../DropdownElements";
import useScroll from "../../hooks/useScroll";

function Navbar({ handleMobileNav }) {
  const [onHoverExplore, setOnHoverExplore] = useState(false);
  const [onHoverDot, setOnHoverDot] = useState(false);
  // This is a custom hook that returns the scroll position in the y-axis
  const { scrollYPosition } = useScroll();

  // based on the scroll postion the searchBar is to be displayed on the navbar
  const [showSearchBar, setShowSearchBar] = useState(false);

  function handleExploreHover(state) {
    setOnHoverExplore(state);
  }
  function handleDotHover(state) {
    setOnHoverDot(state);
  }

  useEffect(() => {
    // once scroll postion gets to this point the showSearchBar is set to true
    if (scrollYPosition >= 105) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [scrollYPosition]);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 flex items-center px-[16.1px] min-h-[66px] z-50 " +
        (showSearchBar ? "bg-primary-black" : "bg-transparent")
      }
    >
      {/* <div className="container flex justify-around md:justify-between items-center mx-auto"> */}
      <LogoComplete />
      {/* the searchBar postion is to be maintained so as to prevent UI shift thus base
        on the show prop the style in the searchBar component will be set to display: none */}
      <SearchBar show={showSearchBar} />

      <div className="flex">
        <button
          data-collapse-toggle="mobile-menu-3"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none dark:text-gray-400"
          aria-controls="mobile-menu-3"
          aria-expanded="false"
          onClick={handleMobileNav}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* Larger display */}
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-3"
      >
        <ul className="flex flex-col mt-4 items-center lg:flex-row lg:gap-10 lg:mt-0 ">
          <li>
            {/* onMouseEnter sets the onHoverExplore state to true so as to show the dropdown
              onMouset */}
            <div
              href="#"
              className="relative text-white"
              onMouseOver={() => handleExploreHover(true)}
              onMouseLeave={() => handleExploreHover(false)}
            >
              <a className="block text-white text-[17px] cursor-pointer hover:opacity-90">
                Explore
              </a>
              {/* This is for the dropdown that show when explore is hovered */}
              {onHoverExplore && (
                <>
                  {/* the below div is used because of the effect of hovering even directly above the 
                    dropdown so as to mantain the hover effect */}
                  <div className="absolute bg-transparent h-5 w-44 top-5 right-0"></div>
                  <div>
                    <SmallTriangle dropdown="explore" top={9} right={3} />
                    <DropdownElements
                      dropdown="explore"
                      elements={[
                        "Discover Photos",
                        "Popular Searches",
                        "Leaderboard",
                        "Challenges",
                        "Free Videos",
                        "Pexels Blog",
                      ]}
                      top={9}
                      right={0}
                    />
                  </div>
                </>
              )}
            </div>
          </li>
          <li>
            <a
              href="#"
              className="block text-white text-[17px] hover:opacity-90"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white text-[17px] hover:opacity-90"
            >
              Upload
            </a>
          </li>
          <li>
            <div
              href="#"
              className="relative text-white"
              onMouseOver={() => handleDotHover(true)}
              onMouseLeave={() => handleDotHover(false)}
            >
              <a
                href="#"
                className="block text-white text-[17px] hover:opacity-90"
              >
                <FaEllipsisH />
              </a>
              {onHoverDot && (
                <>
                  {/* the below div is used because of the effect of hovering even directly above the 
                    dropdown so as to mantain the hover effect */}
                  <div className="absolute bg-transparent h-10 w-80 top-3 right-0"></div>
                  <div>
                    <SmallTriangle dropdown="..." top={0} right={3} />
                    <DropdownElements
                      dropdown="..."
                      elements={[
                        "Login",
                        "Join",
                        "Change Language",
                        "Image & Video API",
                        "App & Plugins",
                        "FAQ",
                        "Partnerships",
                        "Imprint & Terms",
                      ]}
                      top={9}
                      right={0}
                    />
                  </div>
                </>
              )}
            </div>
          </li>
          {/* on hover of the join botton it should translate along the y-axis upward */}
          <li className="hover:opacity-90 hover:-translate-y-[1px]">
            <JoinButton />
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;

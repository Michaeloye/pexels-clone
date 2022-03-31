import JoinButton from "../JoinButton";
import LogoComplete from "../LogoComplete";
import SearchBar from "../SearchBar";
import { FaEllipsisH } from "react-icons/fa";
import SmallTriangle from "../SmallTriangle";
import DropdownElements from "../DropdownElements";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center bg-black px-[16.1px] min-h-[66px] z-30">
      <div className="container flex justify-around md:justify-between items-center mx-auto">
        <LogoComplete />
        <SearchBar />

        <div className="flex">
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 items-center lg:flex-row lg:gap-10 lg:mt-0 ">
            <li>
              <div href="#" className="relative text-white text-lg">
                Explore
                <SmallTriangle top={"-4.5px"} right={"22px"} />
                <DropdownElements
                  elements={[
                    "Discover Photos",
                    "Popular Searches",
                    "Leaderboard",
                    "Challenges",
                    "Free Videos",
                    "Pexels Blog",
                  ]}
                  top={10}
                  right={0}
                />
              </div>
            </li>
            <li>
              <a href="#" className="block text-white text-lg">
                License
              </a>
            </li>
            <li>
              <a href="#" className="block text-white text-lg">
                Upload
              </a>
            </li>
            <li>
              <a href="#" className="block text-white text-lg">
                <FaEllipsisH />
              </a>
            </li>
            <li className="lg:-mr-3">
              <JoinButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { HiDownload } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";

// componentize more things
function PhotoColumn({ last }) {
  return (
    <div
      className={
        "block flex-grow flex-shrink mr-[14px] md:mr-[20.3px] " +
        (last ? "last:mr-0" : "")
      }
    >
      <div className="mb-[14px] md:mb-[20.3px]">
        <article className="photo-item-overlay pt-[149.7%] relative block z-0 before:opacity-30 md:before:opacity-0 md:before:hover:opacity-100 ">
          <a className="bg-[rgb(32,32,32)] absolute top-0 left-0 bottom-0 right-0">
            <img src="" className="block w-full max-w-full h-auto border-0" />
          </a>
          {/* poster details */}
          <a
            className="absolute bottom-0 left-0 pb-4 pl-4 no-underline text-white whitespace-nowrap cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200 hover:delay-200 z-20"
            style={{ maxWidth: "calc(100% - 70px)" }}
          >
            <img
              src=""
              height={30}
              width={30}
              className="inline-flex align-middle rounded-[50%] z-20 max-w-full cursor-pointer"
            />
            <span
              className="box-content text-sm whitespace-nowrap mr-10 ml-1 inline-block align-middle overflow-ellipsis overflow-hidden text-[#e8e8e8] "
              style={{ maxWidth: "calc(100% - 40px)" }}
            >
              Harry Suan
            </span>
          </a>
          {/* download like others */}
          <div className="absolute flex bottom-0 right-0 pr-4 pb-4">
            <a className="opacity-80 w-10 delay-100 overflow-hidden z-20 p-0 cursor-pointer">
              <HiDownload size={24} color={"white"} />
            </a>
            <button className="opacity-80 w-10 delay-100 overflow-hidden z-20 p-0">
              <IoMdAddCircleOutline size={24} color={"white"} />
            </button>
            <button className="opacity-80 w-10 delay-100 overflow-hidden z-20 p-0">
              <FiHeart size={24} color={"white"} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PhotoColumn;

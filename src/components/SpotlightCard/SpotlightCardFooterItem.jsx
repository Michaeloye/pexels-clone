import { AiOutlineEye, AiFillHeart } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import numFormatter from "../../utilities/numFormatter";

const Icon = {
  0: <AiOutlineEye size={20} />,
  1: <HiDownload size={20} />,
  2: <AiFillHeart size={20} />,
};

function SpotlightCardFooterItem({ icon, num }) {
  return (
    <div className="flex text-sm gap-2 leading-[18px] font-semibold mt-0 mb-0 items-center mr-[14px] text-[#1a1a1a]">
      {Icon[icon]}
      <div>{numFormatter(num)}</div>
    </div>
  );
}

export default SpotlightCardFooterItem;

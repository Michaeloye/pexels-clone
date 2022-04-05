import React from "react";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

const mobileIcons = {
  0: <GrFacebookOption size={21} />,
  1: <GrTwitter size={21} />,
  2: <BsInstagram size={21} />,
  3: <FaPinterestP size={21} />,
  4: <BsYoutube size={21} />,
};
const icons = {
  0: <GrFacebookOption />,
  1: <GrTwitter />,
  2: <BsInstagram />,
  3: <FaPinterestP />,
  4: <BsYoutube />,
};
function SocialHandle({ icon, mobile }) {
  if (mobile) {
    return (
      <div className="flex items-center justify-center text-white">
        {/* This selects an icon based on the icon prop; if icon is 0 thus icons[0] is used*/}
        {mobileIcons[icon]}
      </div>
    );
  } else {
    return (
      <div className="py-3 px-6 rounded-sm flex items-center justify-center bg-white text-social-hover-gray hover:bg-social-hover-gray hover:text-white ">
        {/* This selects an icon based on the icon prop; if icon is 0 thus icons[0] is used*/}
        {icons[icon]}
      </div>
    );
  }
}

export default SocialHandle;

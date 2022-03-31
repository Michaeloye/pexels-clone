import { useState, useEffect } from "react";
import useScreensize from "../hooks/useScreensize";
import Logo from "./Logo";

function LogoComplete() {
  // The below state is used to check the width of the user's screen and determine if the pexels logo...
  // and text should be displayed or only the pexels logo.
  const [mediumScreen, setMediumScreen] = useState("");
  const { width } = useScreensize();

  useEffect(() => {
    if (width <= 1023) {
      setMediumScreen(true);
    } else {
      setMediumScreen(false);
    }
  }, [width]);
  return (
    <a href="https://flowbite.com" className="flex items-center lg:gap-3">
      <Logo />
      {/* if Not on medium screen display text */}
      {!mediumScreen && (
        <span className="self-center text-lg font-semibold whitespace-nowrap text-white hover:opacity-90">
          Pexels
        </span>
      )}
    </a>
  );
}

export default LogoComplete;

import { useEffect, useState } from "react";

/**
 *
 * useScreensize:
 * An hook to get screensize on resize event
 *
 * @returns height, width
 *
 */

export default function useScreensize() {
  const [screen, setScreen] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const update = () => {
    setScreen((prevState) => {
      return {
        ...prevState,
        height: window.innerHeight,
        width: window.innerWidth,
      };
    });
  };

  useEffect(() => {
    window.addEventListener("resize", () => update());
    return () => {
      window.removeEventListener("resize", () => null);
    };
  }, []);

  return { ...screen };
}

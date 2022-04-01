import { useState, useEffect } from "react";

/**
 *
 * useScroll:
 * An hook to get scroll position
 *
 * @returns scrollYPosition
 *
 */
function useScroll() {
  const [scrollYPosition, setScrollYPosition] = useState();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollYPosition(window.pageYOffset);
    });

    return () => {
      window.removeEventListener("scroll", () => null);
    };
  }, []);

  return { scrollYPosition };
}

export default useScroll;

import React, { useState } from "react";
import TitleTabs from "../components/TitleTabs";

function Home() {
  const [onHover, setOnHover] = useState(false);
  function handleHover(state) {
    setOnHover(state);
  }
  return (
    <main className="px-[14px] lg:px-7 m-auto max-w-[1440px] min-h-[1400px]">
      {/* title tabs */}
      <TitleTabs />
    </main>
  );
}

export default Home;

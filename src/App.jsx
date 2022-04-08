import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs";
import TopSection from "./components/TopSection/TopSection";
import Challenges from "./pages/Challenges";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Videos from "./pages/Videos";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function handleMobileNav() {
    setShowMobileNav((prevState) => !prevState);
  }
  return (
    <div className="App">
      <HashRouter>
        <Navbar handleMobileNav={handleMobileNav} />
        {showMobileNav && <MobileNav />}
        <TopSection />
        <Tabs />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/challenges" element={<Challenges />} />
          <Route path="/search/:query" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

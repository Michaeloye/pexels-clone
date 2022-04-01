import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs";
import TopSection from "./components/TopSection/TopSection";
import Challenges from "./pages/Challenges";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Videos from "./pages/Videos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <TopSection />
        <Tabs />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/challenges" element={<Challenges />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideoCallProvider } from "./components/VideoCallContext";
import Home from "./components/Home";
import Room from "./components/Room";

const App = () => {
  return (
    <Router>
      <VideoCallProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </VideoCallProvider>
    </Router>
  );
};

export default App;

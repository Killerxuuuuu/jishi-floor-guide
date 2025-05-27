import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloorMap from "./components/FloorMap";
import RoomDetails from "./pages/RoomDetails"; // 新增房间详情页面

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", margin: "1rem" }}>
          济事楼 4 楼导览系统
        </h1>
        <Routes>
          <Route path="/" element={<FloorMap />} />
          <Route path="/room/:roomId" element={<RoomDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

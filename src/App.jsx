import React from "react";
import { Routes, Route } from "react-router-dom"; // 移除 BrowserRouter
import FloorMap from "./components/FloorMap";
import RoomDetails from "./pages/RoomDetails"; // 新增房间详情页面

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1rem" }}>
        济事楼 4 楼导览系统
      </h1>
      <Routes>
        <Route path="/" element={<FloorMap />} />
        <Route path="/room/:roomId" element={<RoomDetails />} />
      </Routes>
    </div>
  );
}

export default App;

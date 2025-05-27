import React from "react";
import { useParams } from "react-router-dom";
import room401Image from "../assets/room401.png"; // 401房间图片
import room402Image from "../assets/room402.png"; // 402房间图片

const RoomDetails = () => {
  const { roomId } = useParams(); // 获取 URL 中的 roomId 参数

  const roomDetails = {
    "401": {
      description: "这是401房间的详情。",
      image: room401Image,
    },
    "402": {
      description: "这是402房间的详情。",
      image: room402Image,
    },
    "测试房间": {
      description: "这是一个测试房间的详情。",
      image: room401Image, // 使用401的图片
    },
  };

  const room = roomDetails[roomId];

  if (!room) {
    return <p>房间信息不存在。</p>;
  }

  return (
    <div
      className="flex p-4"
      style={{
        flexDirection: "row", // 确保横向排列
        flexWrap: "nowrap", // 防止换行
        alignItems: "flex-start", // 顶部对齐
        width: "100%", // 确保父容器宽度足够
      }}
    >
      {/* 左侧图片 */}
      <img
        src={room.image}
        alt={`房间 ${roomId}`}
        className="mr-4"
        style={{ width: "2400px", height: "1600px", objectFit: "cover" }} // 调整图片大小
      />
      {/* 右侧描述 */}
      <div style={{ flex: 1 }}> {/* 右侧描述占据剩余空间 */}
        <h1 className="text-2xl font-bold mb-4">房间 {roomId}</h1>
        <p>{room.description}</p>
      </div>
    </div>
  );
};

export default RoomDetails;

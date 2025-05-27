import React, { useState } from "react";
import Modal from "react-modal"; // 引入 react-modal
import { useNavigate } from "react-router-dom";
import floorImage from "../assets/floor.png"; // 确保文件路径和扩展名正确

// 房间图片导入
import room401Image from "../assets/room401.png";
import room402Image from "../assets/room402.png";
import room407Image1 from "../assets/room407_1.png";
import room407Image2 from "../assets/room407_2.png";
import room408Image1 from "../assets/room408_1.png";
import room408Image2 from "../assets/room408_2.png";
import room409Image from "../assets/room409.png";
import room410Image from "../assets/room410.png";
import room412Image from "../assets/room412.png";
import room414Image from "../assets/room414.png";
import room416Image from "../assets/room416.png";
import room417Image from "../assets/room417.png";
import room418Image from "../assets/room418.png";
import room419Image1 from "../assets/room419_1.png";
import room419Image2 from "../assets/room419_2.png";
import room426Image1 from "../assets/room426_1.png";
import room426Image2 from "../assets/room426_2.png";
import room428Image1 from "../assets/room428_1.png";
import room428Image2 from "../assets/room428_2.png";
import room430Image1 from "../assets/room430_1.png";
import room430Image2 from "../assets/room430_2.png";
import room432Image from "../assets/room432.png";
import room434Image1 from "../assets/room434_1.png";
import room434Image2 from "../assets/room434_2.png";
import room441Image from "../assets/room441.png";
import room442Image from "../assets/room442.png";
import room443Image from "../assets/room443.png";
import room444Image from "../assets/room444.png";
import room445Image from "../assets/room445.png";
import room446Image from "../assets/room446.png";
import room448Image from "../assets/room448.png";
import room450Image1 from "../assets/room450_1.png";
import room450Image2 from "../assets/room450_2.png";
import room451Image1 from "../assets/room451_1.png";
import room451Image2 from "../assets/room451_2.png";
import room451Image3 from "../assets/room451_3.png";
import room455Image from "../assets/room455.png";
import room456Image from "../assets/room456.png";
import frontdoorImage from "../assets/frontdoor.png"; // 前门图片
import readingcornerImage from "../assets/reading_corner.png"; // 阅览角图片
import cultureexhibitionImage1 from "../assets/SSE_culture_exhibition_1.png"; // 文化展览图片
import cultureexhibitionImage2 from "../assets/SSE_culture_exhibition_2.png"; // 文化展览图片
import staffactivitycenterImage1 from "../assets/staff_activity_center_1.png"; // 员工活动中心图片
import staffactivitycenterImage2 from "../assets/staff_activity_center_2.png"; // 员工活动中心图片
import studentactivitycenterImage from "../assets/student_activity_center.png"; // 学生活动中心图片

Modal.setAppElement("#root"); // 设置应用的根元素，避免无障碍警告

const FloorMap = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 当前显示的图片索引
  const [clickCount, setClickCount] = useState(0); // 记录点击次数
  const [searchQuery, setSearchQuery] = useState(""); // 搜索框输入内容
  const [searchResults, setSearchResults] = useState([]); // 搜索结果
  const navigate = useNavigate();

  const roomDetails = {
    "407": {
      images: [room407Image1, room407Image2], // 示例图片
      roomNumber: "407",
      roomType: "教育部工程研究中心实验室",
      occupant: [], // 使用人改为数组
    },
    "408": {
      description: "大小姐驾到，通通闪开",
      images: [room408Image1, room408Image2], // 示例图片
      roomNumber: "408",
      roomType: "办公室",
      occupant: [], // 使用人改为数组
    },
    "409": {
      images: [room409Image], // 示例图片
      roomNumber: "409",
      roomType: "教育部工程研究中心实验室",
      occupant: [], // 使用人改为数组
    },
    "410": {
      images: [room410Image], // 示例图片
      roomNumber: "410",
      roomType: "教研室",
      occupant: ["王冬青","李江峰","夏波涌","张颖"], // 使用人改为数组
    },
    "412": {
      images: [room412Image], // 示例图片
      roomNumber: "412",
      roomType: "教研室",
      occupant: ["刘岩","张惠娟","孙萍","罗怡桂"], // 使用人改为数组
    },
    "414": {
      images: [room414Image], // 示例图片
      roomNumber: "414",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "416": {
      images: [room416Image], // 示例图片
      roomNumber: "416",
      roomType: "机房",
      occupant: [], // 使用人改为数组
    },
    "417": {
      images: [room417Image], // 示例图片
      roomNumber: "417",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "418": {
      images: [room418Image], // 示例图片
      roomNumber: "418",
      roomType: "教授办公室",
      occupant: ["张林","江建慧","刘琴"], // 使用人改为数组
    },
    "419": {
      images: [room419Image1,room419Image2], // 示例图片
      roomNumber: "419",
      roomType: "机房",
      occupant: [], // 使用人改为数组
    },
    "426": {
      images: [room426Image1,room426Image2], // 示例图片
      roomNumber: "426",
      roomType: "教学机房",
      occupant: ["陈梁","杨旻"], // 使用人改为数组
    },
    "428": {
      images: [room428Image1,room428Image2], // 示例图片
      roomNumber: "428",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "430": {
      images: [room430Image1,room430Image2], // 示例图片
      roomNumber: "430",
      roomType: "机房",
      occupant: [], // 使用人改为数组
    },
    "432": {
      images: [room432Image], // 示例图片
      roomNumber: "432",
      roomType: "党员之家",
      occupant: [], // 使用人改为数组
    },
    "434": {
      images: [room434Image1,room434Image2], // 示例图片
      roomNumber: "434",
      roomType: "教室",
      occupant: [], // 使用人改为数组
    },
    "441": {
      images: [room441Image], // 示例图片
      roomNumber: "441",
      roomType: "会议室",
      occupant: [], // 使用人改为数组
    },
    "442": {
      images: [room442Image], // 示例图片
      roomNumber: "442",
      roomType: "教务办公室",
      occupant: ["刘梦露","李慧敏","王彩霞","杨丹","姚仕仪"], // 使用人改为数组
    },
    "443": {
      images: [room443Image], // 示例图片
      roomNumber: "443",
      roomType: "实验中心",
      occupant: ["陈梁","杨旻","王彩霞","杨丹","姚仕仪"], // 使用人改为数组
    },
    "444": {
      images: [room444Image], // 示例图片
      roomNumber: "444",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "445": {
      images: [room445Image], // 示例图片
      roomNumber: "445",
      roomType: "强电间",
      occupant: [], // 使用人改为数组
    },
    "446": {
      images: [room446Image], // 示例图片
      roomNumber: "446",
      roomType: "学生工作办公室",
      occupant: ["张砚秋","丁瑞庭","葛蕾","焦嘉欣","钟梦莹","陈璞皎"], // 使用人改为数组
    },
    "448": {
      images: [room448Image], // 示例图片
      roomNumber: "448",
      roomType: "副书记办公室/院务助理办公室",
      occupant: ["陈荣","吴晓培","宋井宽"], // 使用人改为数组
    },
    "450": {
      images: [room450Image1, room450Image2], 
      roomNumber: "450",
      roomType: "院长办公室/党委书记办公室",
      occupant: ["申恒涛","熊岚"], 
    },
    "451": {
      images: [room451Image1, room451Image2, room451Image3],
      roomNumber: "451",
      roomType: "副院长办公室",
      occupant: ["王成","何良华","张林"], 
    },
    "455": {
      images: [room455Image], // 示例图片
      roomNumber: "455",
      roomType: "会议室",
      occupant: [], // 使用人改为数组
    },
    "456": {
      images: [room456Image], // 示例图片
      roomNumber: "456",
      roomType: "党委办公室",
      occupant: ["周微微","陆凤兰","赵清理"], // 使用人改为数组
    },
    "前门": {
      description: "欢迎来到同济大学软件学院",
      images: [frontdoorImage], // 单张图片
      roomNumber: "",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "阅览角": {
      description: "这里是一个安静的阅读角落",
      images: [readingcornerImage], // 单张图片
      roomNumber: "",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "文化展览": {
      description: "这里展示了软件学院的文化和历史",
      images: [cultureexhibitionImage1, cultureexhibitionImage2], // 多张图片
      roomNumber: "",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "员工活动中心": {
      description: "这里是教职工的活动中心，可以打乒乓球和台球",
      images: [staffactivitycenterImage1, staffactivitycenterImage2], // 多张图片
      roomNumber: "",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "学生活动中心": {
      description: "这里是学生活动中心，可以下棋弹钢琴。",
      images: [studentactivitycenterImage], // 单张图片
      roomNumber: "",
      roomType: "",
      occupant: [], // 使用人改为数组
    },
    "测试房间": {
      description: "The moon is looking at you.",
      images: [room401Image], // 单张图片
      roomNumber: "???401?",
      roomType: "Lab?",
      occupant: ["You"], // 使用人改为数组
    },
  };

  const handleRoomClick = (roomId) => {
    if (roomId === "测试房间") {
      if (clickCount + 1 < 44) {
        setClickCount(clickCount + 1);
        return;
      }
      setClickCount(0); // 重置点击次数
    }
    setSelectedRoom(roomDetails[roomId]);
    setCurrentImageIndex(0); // 重置图片索引
    setModalIsOpen(true); // 打开模态窗口
  };

  const handleNextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedRoom.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedRoom.images.length) % selectedRoom.images.length
      );
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]); // 如果搜索框为空，清空搜索结果
      return;
    }
    const results = Object.entries(roomDetails).filter(
      ([roomId, room]) =>
        roomId !== "测试房间" && // 排除测试房间
        (
          room.occupant.some((person) => person.includes(searchQuery)) || // 搜索使用人
          room.roomType.includes(searchQuery) || // 搜索房间类型
          room.roomNumber.includes(searchQuery) // 搜索房间号
        )
    );
    setSearchResults(results);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* 搜索框 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索（房间号、使用人...）"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
        >
          搜索
        </button>
      </div>

      {/* 搜索结果 */}
      {searchResults.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">搜索结果：</h2>
          <ul>
            {searchResults.map(([roomId, room]) => (
              <li key={roomId}>
                <button
                  onClick={() => handleRoomClick(roomId)}
                  className="text-blue-500 underline"
                >
                  房间号：{room.roomNumber}（{room.roomType}）
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 地图图片 */}
      <div className="relative w-full max-w-5xl">
        <img
          src={floorImage}
          alt="济事楼4楼平面图"
          useMap="#floor-map"
          className="w-full"
        />
        <map name="floor-map">
          <area
            shape="rect"
            coords="100,150,250,250"
            alt="401"
            onClick={() => handleRoomClick("401")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="rect"
            coords="300,150,450,250"
            alt="402"
            onClick={() => handleRoomClick("402")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1325,838,1366,950,1437,924,1392,809" // 407房间的多边形坐标
            alt="407"
            onClick={() => handleRoomClick("407")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1397,1026,1468,998,1515,1126,1443,1154" // 407房间的多边形坐标
            alt="408"
            onClick={() => handleRoomClick("408")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1157,893,1322,840,1366,955,1198,1017" // 407房间的多边形坐标
            alt="409"
            onClick={() => handleRoomClick("409")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1313,1054,1403,1020,1440,1151,1356,1188" // 407房间的多边形坐标
            alt="410"
            onClick={() => handleRoomClick("410")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1207,1089,1310,1058,1353,1188,1251,1223" // 407房间的多边形坐标
            alt="412"
            onClick={() => handleRoomClick("412")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="893,1039,974,1082,1061,1114,1011,1257,918,1219,828,1167" // 407房间的多边形坐标
            alt="414"
            onClick={() => handleRoomClick("414")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="737,952,896,1039,821,1170,660,1076" // 407房间的多边形坐标
            alt="416"
            onClick={() => handleRoomClick("416")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="762,890,927,977,986,877,821,781" // 407房间的多边形坐标
            alt="417"
            onClick={() => handleRoomClick("417")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="507,989,656,1076,731,946,576,865" // 407房间的多边形坐标
            alt="418"
            onClick={() => handleRoomClick("418")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="613,805,672,700,824,784,759,890" // 407房间的多边形坐标
            alt="419"
            onClick={() => handleRoomClick("419")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="345,725,404,759,464,659,404,625" // 407房间的多边形坐标
            alt="426"
            onClick={() => handleRoomClick("426")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="436,563,495,600,460,653,404,622" // 407房间的多边形坐标
            alt="428"
            onClick={() => handleRoomClick("428")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="470,538,523,575,628,392,572,360" // 407房间的多边形坐标
            alt="430"
            onClick={() => handleRoomClick("430")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="604,307,647,332,669,289,625,264" // 407房间的多边形坐标
            alt="432"
            onClick={() => handleRoomClick("432")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="632,264,675,192,719,211,672,292" // 407房间的多边形坐标
            alt="434"
            onClick={() => handleRoomClick("434")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="912,326,1005,376,1052,298,961,236" // 407房间的多边形坐标
            alt="441"
            onClick={() => handleRoomClick("441")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="768,410,884,469,936,379,824,311" // 407房间的多边形坐标
            alt="442"
            onClick={() => handleRoomClick("442")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1053,295,1004,375,1085,418,1112,320" // 407房间的多边形坐标
            alt="443"
            onClick={() => handleRoomClick("443")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="938,380,883,470,932,502,989,406" // 407房间的多边形坐标
            alt="444"
            onClick={() => handleRoomClick("444")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="989,406,934,502,989,537,1040,566,1079,449" // 407房间的多边形坐标
            alt="446"
            onClick={() => handleRoomClick("446")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1042,562,1079,449,1128,459,1120,576" // 407房间的多边形坐标
            alt="448"
            onClick={() => handleRoomClick("448")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1130,462,1118,579,1222,581,1271,573,1321,550,1347,532,1302,423,1220,458" // 407房间的多边形坐标
            alt="450"
            onClick={() => handleRoomClick("450")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1196,415,1245,399,1292,374,1263,307,1224,323,1188,335" // 407房间的多边形坐标
            alt="451"
            onClick={() => handleRoomClick("451")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1347,243,1380,323,1466,286,1433,209" // 407房间的多边形坐标
            alt="455"
            onClick={() => handleRoomClick("456")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1400,366,1438,453,1521,417,1482,325" // 407房间的多边形坐标
            alt="456"
            onClick={() => handleRoomClick("456")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="355,902,490,984,582,830,445,752" // 407房间的多边形坐标
            alt="前门"
            onClick={() => handleRoomClick("前门")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="760,260,875,319,924,219,816,157" // 407房间的多边形坐标
            alt="阅览角"
            onClick={() => handleRoomClick("阅览角")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1010,1067,1206,1065,1155,904,1057,904" // 407房间的多边形坐标
            alt="文化展览"
            onClick={() => handleRoomClick("文化展览")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="1631,1090,1861,990,1740,695,1511,763" // 407房间的多边形坐标
            alt="员工活动中心"
            onClick={() => handleRoomClick("员工活动中心")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="poly"
            coords="777,503,691,446,597,622,680,671" // 407房间的多边形坐标
            alt="学生活动中心"
            onClick={() => handleRoomClick("学生活动中心")}
            style={{ cursor: "pointer" }}
          />
          <area
            shape="rect"
            coords="0,0,10000,10000" // 测试房间的坐标
            alt="测试房间"
            onClick={() => handleRoomClick("测试房间")}
          />
        </map>
      </div>

      {/* 模态窗口 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedRoom && (
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">房间详情</h1>
            <div className="flex gap-4">
              {/* 左侧图片 */}
              <div className="relative">
                <a href={selectedRoom.images[currentImageIndex]} target="_blank" rel="noopener noreferrer">
                  <img
                    src={selectedRoom.images[currentImageIndex]}
                    alt="房间图片"
                    className="mb-2"
                    style={{ width: "450px", height: "300px", objectFit: "cover", cursor: "pointer" }}
                  />
                </a>
                <p className="text-xs text-gray-400 text-center">点击图片查看详情</p> {/* 调整字体大小 */}
                <div className="flex justify-between mt-2">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={handlePreviousImage}
                  >
                    上一张
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={handleNextImage}
                  >
                    下一张
                  </button>
                </div>
              </div>
              {/* 右侧描述 */}
              <div className="mb-4 text-base">
                {selectedRoom.roomNumber && (
                  <p><strong>房间号：</strong> {selectedRoom.roomNumber}</p>
                )}
                {selectedRoom.roomType && (
                  <p><strong>房间类型：</strong> {selectedRoom.roomType}</p>
                )}
                {selectedRoom.occupant.length > 0 && (
                  <p><strong>使用人：</strong> {selectedRoom.occupant.join(", ")}</p>
                )}
                {selectedRoom.description && (
                  <p> {selectedRoom.description}</p>
                )}
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setModalIsOpen(false)}
            >
              关闭
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FloorMap;
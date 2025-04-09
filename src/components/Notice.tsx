import NoticeCard from "./NoticeCard";
import { IoIosArrowForward } from "react-icons/io";

function Notice() {
  const notices = [
    { title: "4월은 부활절 예배가 있습니다", date: "2025.03.31" },
    { title: "5월은 어린이 주일이 있습니다", date: "2025.05.05" },
    { title: "6월은 여름 성경학교가 있습니다", date: "2025.06.15" },
  ];
  return (
    <div>
      <div className="flex h-fit mt-4 justify-between">
        <h1 className="text-4xl p-3">공지사항</h1>
        <div className="flex items-center cursor-pointer hover:text-black text-[#8C8C8C] font-bold">
          더보기
          <IoIosArrowForward />
        </div>
      </div>
      <hr className="border-2 border-[#7C96C2] w-full" />
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            <NoticeCard title={notice.title} date={notice.date} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Notice;

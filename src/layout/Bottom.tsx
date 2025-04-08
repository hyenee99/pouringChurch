import { CiYoutube } from "react-icons/ci";
import { FaBloggerB } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Bottom() {
  const date = new Date().toString();
  const year = Number(date.split(" ")[3]);
  return (
    <div className="h-40 w-full flex bg-[#7C96C2] justify-between p-10">
      <div className=" h-full flex flex-col justify-center gap-1 text-white text-left">
        <p>부으시는교회</p>
        <p>한나루로105번길 68 현대 4차 아파트 상가 지하</p>
        <p>0507-1370-4220</p>
        <p>© {year} PouringChurch. All Rights Reserved.</p>
      </div>
      <div className="flex items-center justify-center gap-10 text-white text-4xl cursor-pointer">
        <a href="https://www.youtube.com/@pouringchurch">
          <CiYoutube />
        </a>
        <a href="https://blog.naver.com/pouringchurch">
          <FaBloggerB />
        </a>
        <a href="instagram.com/young_sim79">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
export default Bottom;

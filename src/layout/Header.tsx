import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // 스크롤이 50px 이상 내려갔을 때
      setIsScrolled(true);
    } else {
      // 스크롤이 50px 이하일 때
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-10 w-full h-20 fixed top-0 left-0 flex justify-between items-center transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/30"
      }`}
    >
      <h1 className="content-center p-3 cursor-pointer">✝️부으시는교회</h1>
      <nav className="content-center w-1/3 p-4">
      <ul className="flex cursor-pointer justify-between p-4 [&>li]:hover:font-bold [&>li]:hover:scale-110 text-[20px]">
          <li>소개</li>
          <li>말씀</li>
          <li>소식</li>
          <li>Q&A</li>
          <li>로그인</li>
        </ul>
      </nav>
    </div>
    
  );
}
export default Header;

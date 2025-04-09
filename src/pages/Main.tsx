import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainImage from "../images/main1.jpg";
import mainImage2 from "../images/main2.jpg";
import mainImage3 from "../images/main3.jpg";
import mainImage4 from "../images/main4.jpg";
import WorshipInfo from "../components/WorshipInfo";
import Notice from "../components/Notice";
import PrayAndShare from "../components/PrayAndShare";

function Main() {
  const images = [mainImage, mainImage2, mainImage3, mainImage4];

  const settings = {
    infinite: true, // 무한 반복
    speed: 500, // 전환 속도 (ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 5000, // 자동 재생 속도 (ms)
    fade: true, // 페이드 효과 활성화
    pauseOnHover: false, // 마우스 호버 시 멈추지 않음
    pauseOnFocus: false, // 포커스 시 멈추지 않음
    cssEase: "ease-in-out",
  };

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <p
          className="absolute top-1/3 left-25 p-4 text-[25px] bg-opacity-50 text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)" }}
        >
          [눅4:18-19]
          <br />
          주의 성령이 내게 임하셨으니 이는 가난한 자에게 복음을 전하게 하시려고
          <br />
          내게 기름을 부으시고 나를 보내사 포로된 자에게 자유를,
          <br />눈 먼 자에게 다시 보게 함을 전파하며 눌린 자를 자유롭게 하고
          <br />
          주의 은혜의 해를 전파하게 하려 하심이라 하였더라
        </p>
      </div>
      <WorshipInfo />
      <Notice />
      <PrayAndShare />
    </>
  );
}

export default Main;

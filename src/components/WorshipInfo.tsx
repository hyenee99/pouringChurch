import Playlist from "./Playlist";
import RevealAnimation from "./RevealAnimation";
import Worship from "./Worship";

function WorshipInfo() {
  const data = [
    {
      title: "주일 예배(여호와 닛시): 오전 11시",
      contents:
        "일주일을 살아가는데 필요한 하나님의 생명 양식을 공급하는 예배입니다. 말씀의 근원이신 예수님에 대하여 깊이 묵상합니다.\n 또한 세상에 나가 빛과 소금이 되어 예배자로 부르심을 감당할 수 있도록 도와주고 세워주는 예배입니다.",
      playlistId: "PLhM_8NV1HN9TKtw2oGLwITZiNfp66fg8G",
    },
    {
      title: "새벽 예배(여호와 삼마): 오전 6시",
      contents: "일용한 만나를 공급하시는 하나님을 만나는 시간입니다.",
      playlistId: "PLhM_8NV1HN9Qp-sjCkdqUmeNSDHyyndXe",
    },
    {
      title: "수요 예배(여호와 이레): 저녁 8시",
      contents:
        "말씀의 양식의 기초를 다지는 시간입니다. 구속사적으로 하나님이 어떻게 이 땅에 예수님을 보내셨고, 예수님이 우리에게 향한 마음이 무엇인지 말씀으로 다지는 예배입니다.\n말씀을 기초를 다져서 하나님이 준비하신 모든 것을 누릴 수 있도록 뼈대를 세우는 예배입니다.",
      playlistId: "PLhM_8NV1HN9TX5CHBKJ3lr5Xcwz354XZU",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl p-3 mt-4">예배 안내</h1>
      {data.map((item, index) => (
        <RevealAnimation
          key={index}
          delay={index * 0.15} // 각 항목마다 지연 시간을 다르게 설정하여 순차적으로 나타나게 함
        >
          <div className="whitespace-pre-line mt-4" key={index}>
            <Worship title={item.title} contents={item.contents} />
            <Playlist playlistId={item.playlistId} />
          </div>
        </RevealAnimation>
      ))}
      <button className="block bg-[#7C96C2] hover:bg-[#5A7298] text-white font-bold text-xl w-3xs p-4 rounded cursor-pointer m-auto">
        <a href="https://www.youtube.com/@pouringchurch">예배 더보기</a>
      </button>
    </div>
  );
}
export default WorshipInfo;

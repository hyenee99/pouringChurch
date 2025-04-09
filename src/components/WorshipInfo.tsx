import Worship from "./Worship";

function WorshipInfo() {
  const data = [
    {
      title: "주일 예배(여호와 닛시): 오전 11시",
      contents:
        "일주일을 살아가는데 필요한 하나님의 생명 양식을 공급하는 예배입니다. 말씀의 근원이신 예수님에 대하여 깊이 묵상합니다. 또한 세상에 나가 빛과 소금이 되어 예배자로 부르심을 감당할 수 있도록 도와주고 세워주는 예배입니다.",
    },
    {
      title: "새벽 예배(여호와 삼마): 오전 6시",
      contents: "일용한 만나를 공급하시는 하나님을 만나는 시간입니다.",
    },
    {
      title: "수요 예배(여호와 이레): 저녁 8시",
      contents:
        "말씀의 양식의 기초를 다지는 시간입니다. 구속사적으로 하나님이 어떻게 이 땅에 예수님을 보내셨고, 예수님이 우리에게 향한 마음이 무엇인지 말씀으로 다지는 예배입니다. 말씀을 기초를 다져서 하나님이 준비하신 모든 것을 누릴 수 있도록 뼈대를 세우는 예배입니다.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl p-3 mt-4">예배 안내</h1>
      {data.map((item, index) => (
        <Worship key={index} title={item.title} contents={item.contents} />
      ))}
    </div>
  );
}
export default WorshipInfo;

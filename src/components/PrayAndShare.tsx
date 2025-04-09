import PrayCard from "./PrayCard";
function PrayAndShare() {
  const data = [
    {
      img: "/images/pray1.jpg",
      title: "중보기도 요청",
    },
    {
      img: "/images/pray2.jpg",
      title: "상담 요청",
    },
    {
      img: "/images/pray3.jpg",
      title: "기도제목 나눔",
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-4xl p-3 mt-4 mb-2">기도 및 나눔</h1>
      <div className="flex justify-around">
        {data.map((item, index) => (
          <PrayCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}
export default PrayAndShare;

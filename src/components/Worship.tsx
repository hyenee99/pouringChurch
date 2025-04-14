interface worshipProps {
  title: string;
  contents: string;
}

function Worship({ title, contents }: worshipProps) {
  return (
    <div className="p-3">
      <h1 className="text-xl pb-2 text-[#5A7298]">{title}</h1>
      <p className="text-lg">{contents}</p>
    </div>
  );
}

export default Worship;

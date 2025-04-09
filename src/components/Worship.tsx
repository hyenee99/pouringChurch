interface worshipProps {
  title: string;
  contents: string;
}

function Worship({ title, contents }: worshipProps) {
  return (
    <div className="p-3">
      <h1>{title}</h1>
      <p>{contents}</p>
    </div>
  );
}

export default Worship;

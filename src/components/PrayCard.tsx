interface PrayCardProps {
  img: string;
  title: string;
}

function PrayCard({ img, title }: PrayCardProps) {
  return (
    <div className="bg-[#F5F5F5] w-[30%] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-110">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-[250px] object-cover" 
      />
      <div className="p-4 text-center text-xl font-bold">
        {title}
      </div>
    </div>
  );
}

export default PrayCard;

interface noticeProps {
  title: string;
  date: string;
}
function NoticeCard({title,date}:noticeProps) {
  return (
      <div className="p-3 border-b-1 border-[#8C8C8C] w-full">
        <p className="text-[20px] font-bold">{title}</p>
        <p className="text-[#8C8C8C]">{date}</p>
      </div>
  );
}
export default NoticeCard;
const BadgeCard = ({ id, coverImage, tag, level }) => {
  return (
    <div className=" py-4 flex bg-white flex-col items-center shadow w-36 h-36 " key={id}>
      <img alt={`${tag} badge`} className=" h-16 w-16" src={coverImage} />
      <span className=" text-xs">{tag}</span>
      <span className=" text-center text-sm ">{level}</span>
    </div>
  );
};

export default BadgeCard;

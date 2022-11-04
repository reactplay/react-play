const BadgeCard = ({
  id,
  coverImage,
  tag,
  level
}) => {
  return (
    <div key={id}
      className=" py-4 flex bg-white flex-col items-center shadow w-36 h-36 ">
      <img src={coverImage} alt={`${tag} badge`} className=" h-16 w-16" />
      <span className=" text-xs">{tag}</span>
      <span className=" text-center text-sm ">{level}</span>
    </div>
  );
}

export default BadgeCard;
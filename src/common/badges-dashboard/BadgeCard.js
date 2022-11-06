const BadgeCard = ({
  key,
  id,
  coverImage,
  tag,
  level,
  source,
  handleClaim
}) => {

  const tweetIt = () => {
    const URL = window.location.href;
    const msg = `Hurry !! \nI have earned "${level}" badge from ReactPlay\n`;
    const hasTags = [
      "#reactplay\n"
    ];
    const tags = encodeURIComponent(hasTags.join(","));
    return `https://twitter.com/intent/tweet?url=${URL}&text=${encodeURIComponent(
      msg
    )}${tags}`;
  }



  return (
    <div key={key}
      className=" py-4 flex bg-white flex-col items-center shadow w-36 h-36 ">
      <img src={coverImage} alt={`${tag} badge`} className=" h-16 w-16" />
      <span className=" text-xs">{tag}</span>
      <span className=" text-center text-sm ">{level}</span>
      {
        (source !== "all") && (
          <a href={tweetIt()} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        )
      }
      {
        source === "notClaimed" && (
          <button onClick={() => {
            console.log(id);
            handleClaim(id);
          }}>
            Claim it
          </button>
        )
      }

    </div>
  );
}

export default BadgeCard;
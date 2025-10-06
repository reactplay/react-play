import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const Like = ({ onLikeClick, likeObj }) => {
  const { liked, number } = likeObj;

  const likeClickHandler = () => {
    if (onLikeClick) return onLikeClick();
  };

  return (
    <button
      className="inline-flex items-center gap-1 -mr-0.5"
      type="button"
      onClick={likeClickHandler}
    >
      <AiOutlineLike className={liked ? 'hidden' : 'icon'} size={24} />
      <AiFillLike className={liked ? 'icon' : 'hidden'} size={24} />
      {number > 0 && <span className="text-sm leading-none align-middle">{number}</span>}
    </button>
  );
};

Like.defaultProps = {
  onLikeClick: null
};

export default Like;

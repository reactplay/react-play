import "./Like.scss";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const Like = ({ onLikeClick, likeObj }) => {
  const {liked, number} = likeObj
  
  const likeClickHandler = () => {
    if (onLikeClick) return onLikeClick();
  };
  
  return (
    <button className="action counted -mr-0.5" onClick={likeClickHandler}>
      <AiOutlineLike size='24px' className={`${liked ? "hidden" : "icon"}`}/>
      <AiFillLike size='24px' className={`${liked ? "icon" : "hidden"}`}/>
      {number > 0 ? (<div className="count-value">{number}</div>):(<div></div>)}
      
    </button>
  );
};

Like.defaultProps = {
  onLikeClick: null,
};

export default Like;

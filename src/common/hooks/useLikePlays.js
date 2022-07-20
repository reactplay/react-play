import { submit } from "common/services/request";
import { LikeIndividualPlay } from "common/services/request/query/like-play";

const useLikePlays = () => {
  const likePlay = async (Obj) => {
    try {
      const likeExec = await submit(LikeIndividualPlay(Obj));
      console.log(likeExec);
    } catch (err) {
      Promise.reject(err);
    }
  };
  const dislikePlay = () => {};

  return { likePlay, dislikePlay };
};

export default useLikePlays;

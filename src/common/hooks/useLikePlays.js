import { submit } from "common/services/request";
import {
  LikeIndividualPlay,
  dislikeIndividualPlay,
} from "common/services/request/query/like-play";

const useLikePlays = () => {
  const likePlay = async (Obj) => {
    try {
      const likeExec = await submit(LikeIndividualPlay(Obj));
      return Promise.resolve(likeExec);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const dislikePlay = async (Obj) => {
    try {
      const resp = await submit(dislikeIndividualPlay(Obj));
      return Promise.resolve(resp);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return { likePlay, dislikePlay };
};

export default useLikePlays;

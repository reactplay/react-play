import { submit } from "common/services/request";
import {
  LikeIndividualPlay,
  unlikeIndividualPlay,
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

  const unLikePlay = async (Obj) => {
    try {
      const resp = await submit(unlikeIndividualPlay(Obj));
      return Promise.resolve(resp);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return { likePlay, unLikePlay };
};

export default useLikePlays;

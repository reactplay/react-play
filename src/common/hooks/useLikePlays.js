import { submit } from 'common/services/request';
import { likeIndividualPlay, unlikeIndividualPlay } from 'common/services/request/query/like-play';

const useLikePlays = () => {
  const likePlay = async (obj) => {
    try {
      const likeExec = await submit(likeIndividualPlay(obj));

      return Promise.resolve(likeExec);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const unLikePlay = async (obj) => {
    try {
      const resp = await submit(unlikeIndividualPlay(obj));

      return Promise.resolve(resp);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return { likePlay, unLikePlay };
};

export default useLikePlays;

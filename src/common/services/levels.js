import { submit } from './request';
import { fetchAllLevels } from './request/query';
// get all tags
const getAllLevels = () => {
  return submit(fetchAllLevels).then((res) => {
    res.forEach((level) => {
      level.value = level.id;
    });

    return res;
  });
};

export const Levels = {
  getAllLevels
};

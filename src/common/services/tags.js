import { submit } from "./request";
import { fetchAllTags } from "./request/query";
// get all tags
const getAllTags = () => {
  return submit(fetchAllTags);
};

export const Tags = {
  getAllTags,
};

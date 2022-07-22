import { submit, submitMutation } from "./request";
import { createATagQuery, fetchAllTags } from "./request/query";
// get all tags
const getAllTags = () => {
  return submit(fetchAllTags);
};

const createATag = (tagObject) => {
  return submitMutation(createATagQuery, tagObject);
};

export const Tags = {
  getAllTags,
  createATag,
};

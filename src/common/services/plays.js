import { submit, submitMutation } from "./request";
import { createATagQuery, fetchAllTags } from "./request/query";
import {
  associatePlayWithTagQuery,
  createPlayQuery,
} from "./request/query/play";
import { Tags } from "./tags";

// Create a play
const createPlay = (playObject) => {
  const objectToSubmit = { ...playObject };
  const tagsTmp = objectToSubmit.tags;
  const tags = [];
  const promises = [];

  // mutation Insert_Play_Mutation {insert_plays_one(object: {name:"DevTestPlay6",description:"DevTestPlay6",issue:"328",language:"js",style:"css",level_id:"bed3cf3f-d7e1-4094-ae07-c3dcde899bc7",github:"DevTestPlay6",owner_user_id:"4fa14525-8f98-45b9-9a8b-c1ba34c6ed43", path:"",component:"", blog:"", video:"", featured:false, cover:""}) {id}}

  delete objectToSubmit.tags;

  // Prepare language
  objectToSubmit.language = objectToSubmit.language.value;

  // Prepare style
  objectToSubmit.style = objectToSubmit.style
    ? objectToSubmit.style.value
    : "css";

  // Prepare level
  objectToSubmit.level_id = objectToSubmit.level.value;
  delete objectToSubmit.level;

  // Prepare issue
  objectToSubmit.issue = objectToSubmit.issue.value;

  // Submit play
  promises.push(submitMutation(createPlayQuery, objectToSubmit));

  // Submit new Tags
  if (tagsTmp && tagsTmp.length) {
    objectToSubmit.tags = [];
    tagsTmp.forEach((tag) => {
      if (tag.id === "") {
        promises.push(
          Tags.createATag({
            name: tag.value,
          })
        );
      } else {
        tags.push(tag.id);
      }
    });
  }

  return Promise.all(promises).then((res) => {
    if (res.length > 1) {
      for (var index = 1; index < res.length; index++) {
        tags.push(res[index].id);
      }
    }

    const tagPlayPromises = [];
    tags.forEach((t) => {
      tagPlayPromises.push(associateTag(t, res[0].id));
    });

    // Submit tag - play association
    return Promise.all(tagPlayPromises).then(() => {
      return res[0].id;
    });
  });
};

const associateTag = (tag, play) => {
  return submitMutation(associatePlayWithTagQuery, {
    play_id: play,
    tag_id: tag,
  });
};

export const Plays = {
  createPlay,
};

import { submit, submitMutation } from "./request";
import { createATagQuery, fetchAllTags } from "./request/query";
import {
  associatePlayWithTagQuery,
  createPlayQuery,
} from "./request/query/play";
import { toKebabCase } from "./string";
import { Tags } from "./tags";

// Create a play
const createPlay = (playObject) => {
  const objectToSubmit = { ...playObject };
  const tagsTmp = objectToSubmit.tags;
  const tags = [];
  const promises = [];

  // Remove tag object array. It will be re-prepared later
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

  // DEV NOTE: Temporary issue resolution. Remove it once the current Issue(369) gets merged
  objectToSubmit.path = `/plays/${toKebabCase(objectToSubmit.name)}`;
  objectToSubmit.dev_mode = true;

  // Submit play
  promises.push(submitMutation(createPlayQuery, objectToSubmit));

  // Submit new Tags
  if (tagsTmp && tagsTmp.length) {
    objectToSubmit.tags = [];
    tagsTmp.forEach((tag) => {
      if (tag.id === "") {
        promises.push(
          Tags.createATag({
            name: tag.name,
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

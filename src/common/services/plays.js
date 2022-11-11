import { submitMutation } from "./request";
import { associatePlayWithTagQuery, createPlayQuery } from "./request/query/play";
import { toKebabCase, toSlug } from "./string";
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
  objectToSubmit.style = objectToSubmit.style ? objectToSubmit.style.value : "css";

  // Prepare slug
  objectToSubmit.slug = toSlug(objectToSubmit.name);

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
  // if (tagsTmp && tagsTmp.length) {
  //   objectToSubmit.tags = [];
  //   tagsTmp.forEach((tag) => {
  //     if (tag.id === "") {
  //       promises.push(
  //         Tags.createATag({
  //           name: tag.name,
  //         })
  //       );
  //     } else {
  //       tags.push(tag.id);
  //     }
  //   });
  // }

  return Promise.all(promises)
    .then(async (res) => {
      await createTags(res[0].id, tagsTmp, tags).catch(console.log);
    })
    .catch(console.log);
};

const associateTag = (tag, play) => {
  return submitMutation(associatePlayWithTagQuery, {
    play_id: play,
    tag_id: tag,
  });
};

/**
 *
 * @param {string} playId - Mandatory
 * @param {object[]} tagsTmp - Mandatory
 * @param {object[]} tags - Optional
 * @returns {Promise}
 */

const createTags = async (playId, tagsTmp = [], actualTags = [], tags = []) => {
  const creatTagPromies = new Array();

  if (tagsTmp && tagsTmp.length) {
    tagsTmp.forEach((tag) => {
      if (tag.id === "") {
        creatTagPromies.push(
          Tags.createATag({
            name: tag.name,
          })
        );
      } else {
        const findTag = actualTags.find((i) => i.id === tag.id);
        if (!findTag) tags.push(tag.id);
      }
    });
  }

  return await Promise.all(creatTagPromies)
    .then(async (res) => {
      console.log(res);
      if (!!res?.length) {
        res.forEach((i) => {
          tags.push(res[i].id);
        });
      }

      const tagPlayPromises = [];
      tags.forEach((t) => {
        tagPlayPromises.push(associateTag(t, playId));
      });

      // Submit tag - play association
      return await Promise.all(tagPlayPromises)
        .then(console.log)
        .catch((err) => Promise.reject(err));
    })
    .catch((err) => {
      console.log("error occured", err);
      return Promise.reject(err);
    });
};

export const Plays = {
  createPlay,
  createTags,
};

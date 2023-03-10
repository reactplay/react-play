import { submit, submitMutation } from './request';
import { deleteATagQuery } from './request/query';
import { associatePlayWithTagQuery, createPlayQuery } from './request/query/play';
import { toKebabCase, toSlug } from './string';
import { FetchPlaysByFilter } from 'common/services/request/query/fetch-plays';
import { toTitleCaseTrimmed } from 'common/services/string';
import { Tags } from './tags';

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
  objectToSubmit.style = objectToSubmit.style ? objectToSubmit.style.value : 'css';

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

  return Promise.all(promises)
    .then(async (res) => {
      await createAndRemoveTags(res?.[0]?.id, tagsTmp, tags).catch((err) => Promise.reject(err));

      return res?.[0]?.id;
    })
    .catch((err) => Promise.reject(new Error(`Error Updating play information: ${err}`)));
};

const associateTag = (tag, play) => {
  return submitMutation(associatePlayWithTagQuery, {
    play_id: play,
    tag_id: tag
  });
};

/**
 *
 * @param {string} playId - Mandatory
 * @param {object[]} tagsTmp - Mandatory
 * @param {object[]} tags - Optional
 * @returns {Promise}
 */

const createAndRemoveTags = (playId, tagsTmp = [], actualTags = [], tags = []) => {
  // promise array to create tags
  const createTagPromies = [];

  // this loop will insert new tags which is not created at backend and also
  // will determine if the tag is created then insert the id into the tags array
  if (tagsTmp && tagsTmp.length) {
    tagsTmp.forEach((tag) => {
      if (tag.id === '') {
        // looking if the id is created
        createTagPromies.push(
          // inserting the promise
          Tags.createATag({
            name: tag.name
          })
        );
      } else {
        // if the the tag is alread created and has id then have to associate it with play
        const findTag = actualTags.find((i) => i.id === tag.id);
        if (!findTag) tags.push(tag.id);
      }
    });
  }

  return Promise.all(createTagPromies) // creating tags which are newly added (doesnt have id)
    .then((res) => {
      if (res?.length) {
        // in response we are getting newly created tag's ids
        res.forEach((i) => {
          tags.push(i.id); // again pushing this ids into tag array to associte with play
        });
      }

      // creating promise array to associate tags with play
      const tagPlayPromises = [];
      tags.forEach((t) => {
        tagPlayPromises.push(associateTag(t, playId));
      });

      // Submit tag - play association
      return Promise.all(tagPlayPromises)
        .then(() => {
          // geting promise array if any tag is deleted
          const deleteTagPromises = deleteATag(playId, actualTags, tagsTmp);

          return Promise.all(deleteTagPromises)
            .then((res) => Promise.resolve(res))
            .catch(() => Promise.reject(new Error('Error happened while deleting tag from play')));
        })
        .catch(() => Promise.reject(new Error('Error while mapping tags with play')));
    })
    .catch(() => {
      return Promise.reject(new Error('Error in creating new tags.'));
    });
};

export const deleteATag = (play_id, actualTags, newTags) => {
  const toBeDeletedTags = []; // to be deleted tag object (only play_id and tag_id)'
  actualTags.forEach((tag) => {
    const toBeDelete = newTags.find((i) => !!i.id && i.id === tag.id);
    if (!toBeDelete) {
      // if the tag is deleted then push the tag id
      const promise = submit(deleteATagQuery({ play_id, tag_id: tag.id }));
      toBeDeletedTags.push(promise);
    }
  });

  return toBeDeletedTags; // array of promises to be resolved or rejected
};

export const getPlaysByFilter = async (filter) => {
  let filter_object = undefined;
  if (filter) {
    Object.keys(filter).forEach((key) => {
      const obj = filter[key];
      if (key !== 'tags') {
        if (obj) {
          filter_object = filter_object || {
            clause: {
              operator: 'and',
              conditions: []
            }
          };
          if (Array.isArray(obj)) {
            const local_cond_clause = {
              operator: 'or',
              conditions: []
            };
            obj.forEach((obj_local) => {
              local_cond_clause.conditions.push({
                field: key,
                operator: 'eq',
                value: obj_local
              });
            });

            filter_object.clause.conditions.push({ clause: local_cond_clause });
          } else if (key === 'text') {
            const local_cond_clause = {
              operator: 'or',
              conditions: []
            };
            const text = obj.split('+').join(' ');

            local_cond_clause.conditions.push({
              field: 'name',
              operator: 'ilike',
              value: `%${text}%`
            });
            local_cond_clause.conditions.push({
              field: 'description',
              operator: 'ilike',
              value: `%${text}%`
            });
            filter_object.clause.conditions.push({ clause: local_cond_clause });
          } else {
            filter_object.clause.conditions.push({
              field: key,
              operator: 'ilike',
              value: obj
            });
          }
        }
      }
    });
  }

  const payload = FetchPlaysByFilter(filter_object);
  const res = await submit(payload);
  if (filter && filter.tags) {
    const res_tags_filters = res.filter((play) => {
      return containTags(play, filter.tags);
    });

    return processPlays(res_tags_filters);
  }

  return processPlays(res);
};

const containTags = (play, tags) => {
  let res = false;
  for (var i = 0; i < play.play_tags.length; i++) {
    if (tags.indexOf(play.play_tags[i].tag_id) > -1) {
      res = true;

      break;
    }
  }

  return res;
};

const processPlays = (plays) => {
  plays.forEach((play) => {
    play.title_name = toTitleCaseTrimmed(play.name);
  });

  return plays;
};

export const Plays = {
  createPlay,
  createAndRemoveTags
};

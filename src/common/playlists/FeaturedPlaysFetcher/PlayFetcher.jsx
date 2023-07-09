import { ParseQuery, QueryDBTranslator } from 'common/search/search-helper';
import { getPlaysByFilter } from 'common/services/plays';
import { toSanitized } from 'common/services/string';
import * as all_plays from 'plays';

/**
 * Fetches plays based on the provided location search.
 * @param {string} locationSearch - The location search string.
 * @returns {Array} - The array of found plays.
 */
export const fetchPlays = async (locationSearch) => {
  const parsedQuery = ParseQuery(locationSearch);
  const translatedQuery = parsedQuery ? QueryDBTranslator(parsedQuery) : undefined;
  const res = await getPlaysByFilter(translatedQuery);
  const foundPlays = [];

  if (res) {
    res.forEach((play) => {
      const sanitizedTitle = toSanitized(play.title_name);
      const playComponent = play.component || sanitizedTitle;

      if (all_plays[playComponent]) {
        foundPlays.push(play);
      }
    });
  }

  return foundPlays;
};

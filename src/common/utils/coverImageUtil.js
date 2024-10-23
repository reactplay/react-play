import FallbackImage from 'images/play-fallback-cover.png';
import { IMAGE_EXTENSIONS, FULFILLED_STATUS } from './utilsConstants';

/**
 * Tries to dynamically import the image with the given extension for the specified play slug.
 *
 * @param {string} playSlug - The slug of the play.
 * @param {string} extension - The image extension (e.g., 'png', 'jpg').
 * @returns {Promise} - A promise that resolves with the image or rejects if not found.
 */
const loadImageForExtension = (playSlug, extension) =>
  import(`plays/${playSlug}/cover.${extension}`);

/**
 * Attempts to load the cover image for a play by trying multiple image formats.
 * Falls back to a default image if none of the formats are available.
 *
 * @param {string} playSlug - The slug of the play.
 * @returns {Promise} - A promise that resolves to the cover image or the fallback image.
 */
export const loadCoverImage = async (playSlug) => {
  // const imagePromises = supportedExtensions.map((extension) =>
  const imagePromises = IMAGE_EXTENSIONS.map((extension) =>
    loadImageForExtension(playSlug, extension)
  );

  const results = await Promise.allSettled(imagePromises);

  const image = results.find(
    (result) => result.status === FULFILLED_STATUS && result.value?.default
  );

  return image?.value.default || FallbackImage;
};

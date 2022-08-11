/**
 *
 * @param path cover path
 * @returns absolute url for cover image
 */
export const getLocalPlayCoverURL = (path) => {
  return `${window.location.protocol}//${window.location.hostname}${path}`;
};

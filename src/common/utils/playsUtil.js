/**
 *
 * @param path cover path
 * @returns absolute url for cover image for production build
 */
export const getProdUrl = (path) => {
  return `https://reactplay.io${path}`;
};

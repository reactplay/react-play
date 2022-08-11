export const getLocalPlayCoverURL = (path) => {
  return `${window.location.protocol}//${window.location.hostname}${path}`;
};

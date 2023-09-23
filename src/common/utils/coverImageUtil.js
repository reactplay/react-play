export const loadCoverImage = (playSlug, coverExtension) => {
  // Shimmer effect
  if (coverExtension === null) {
    return '';
  }

  return coverExtension ? `plays/${playSlug}/cover.${coverExtension}` : 'images/thumb-play.png';
};

export const loadCoverImage = async (upPath = '', playSlug) => {
  const acceptedImgExtensions = [`png`, `jpg`, `jpeg`, 'webp'];

  const imgPromises = acceptedImgExtensions.map((ext) =>
    import(/* @vite-ignore */ `${upPath}plays/${playSlug}/cover.${ext}`)
  );

  const response = await Promise.allSettled(imgPromises);

  const fulfilledResult = response.find(
    (result) => result.status === 'fulfilled' && result.value.default
  );

  if (fulfilledResult?.value.default) {
    return fulfilledResult?.value.default;
  }

  return null;
};

export const  loadCoverImage = async (playSlug) => {
  const acceptedImgExtensions = [`png`, `jpg`, `jpeg`];
  const imgPromises = acceptedImgExtensions.map((ext) => import(/* @vite-ignore */ `plays/${playSlug}/cover.${ext}`));

  const response = await Promise.allSettled(imgPromises);

  const fulfilledResult = response.find(
    (result) => result.status === 'fulfilled' && result.value.default
  );

  return fulfilledResult?.value.default;
}

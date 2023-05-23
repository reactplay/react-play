export async function loadCoverImage(playSlug) {
  const acceptedImgExtensions = [`png`, `jpg`, `jpeg`];
  const imgPromises = acceptedImgExtensions.map((ext) => import(`plays/${playSlug}/cover.${ext}`));

  const response = await Promise.allSettled(imgPromises);

  const fulfilledResult = response.find(
    (result) => result.status === 'fulfilled' && result.value.default
  );

  return fulfilledResult?.value.default;
}

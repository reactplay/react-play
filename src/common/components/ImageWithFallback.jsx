const ImageWithFallback = ({ isThumbnail = true, src = '', alt = '', classname = '' }) => {
  let srcsetWithoutExt = '';
  srcsetWithoutExt = src.split('.').slice(0, -1).join('.');

  let srcset = srcsetWithoutExt;
  if (isThumbnail) {
    srcset = srcsetWithoutExt.replace('.', '_small.');

    // little hack in case of
    srcset = srcset.replace('@fs/', '');
  }

  // const WebpImg = loadable(() => import(/* @vite-ignore */ c))
  // const PngImg = loadable(() => import(/* @vite-ignore */ '../../../' + srcset + '.png'))

  return (
    <picture>
      <source srcSet={srcset + '.webp'} type="image/webp" />
      <source srcSet={srcset + '.png'} type="image/png" />
      <img alt={alt} className={classname} loading="lazy" src={src} />
    </picture>
  );
};

export default ImageWithFallback;

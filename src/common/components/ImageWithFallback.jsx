const ImageWithFallback = ({
  isThumbnail = true,
  src = '',
  relativePath = '../../',
  alt = '',
  classname = ''
}) => {
  let srcsetWithoutExt = '';
  if (!src || src === 'images/thumb-play.png') {
    srcsetWithoutExt = '/images/thumb-play';
    relativePath = '';
  } else {
    srcsetWithoutExt = relativePath + src.split('.').slice(0, -1).join('.');
  }

  const srcset = isThumbnail ? srcsetWithoutExt + '_small' : srcsetWithoutExt;

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

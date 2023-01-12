import React, { useCallback, useEffect, useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import data from './common/data';
import './styles.css';

function ImageCarousel(props: any) {
  // Your Code Start below.
  const [activeSlide, setActiveSlide] = useState<number>(Math.floor(data.length / 2) || 0);
  const [startPos, setStartPos] = useState<number>(0);
  const [endPos, setEndPos] = useState<number>(0);
  const totalSlides: number = data.length;
  const threshold = 100;

  const isSwipe = useCallback(() => Math.abs(endPos - startPos) >= threshold, [endPos, startPos]);

  const touchEnd = (e: TouchEvent) => {
    setEndPos(e.changedTouches[0].clientX);
  };
  const touchStart = (e: TouchEvent) => {
    setStartPos(e.touches[0].clientX);
  };

  const handleActiveSlide = useCallback(
    (direction = 0) => {
      // 0 -> right 1-> left
      if (direction === 0) {
        setActiveSlide((preV) => (activeSlide === data.length - 1 ? 0 : preV + 1));
      }
      if (direction === 1) {
        setActiveSlide((preV) => (activeSlide === 0 ? totalSlides - 1 : preV - 1));
      }
    },
    [activeSlide, totalSlides]
  );

  useEffect(() => {
    const sliderContainer = document.querySelector('.image-slider') as HTMLElement;
    const width: number = sliderContainer.offsetWidth;

    if (!sliderContainer) return;

    sliderContainer.style.transform = `
      translateX(-${activeSlide * width}px)
    `;
  }, [activeSlide, handleActiveSlide]);

  useEffect(() => {
    const wrapperContainer = document.querySelector('.wrapper') as HTMLElement;
    wrapperContainer.addEventListener('touchstart', touchStart, {
      passive: true
    });
    wrapperContainer.addEventListener('touchend', touchEnd, { passive: true });
  }, []);

  useEffect(() => {
    if (!isSwipe()) return;

    if (endPos - startPos < 0) {
      handleActiveSlide(0);
    }

    if (endPos - startPos > 0) {
      handleActiveSlide(1);
    }
  }, [endPos, handleActiveSlide, isSwipe, startPos]);

  return (
    <>
      <div className="play-details image-carousel">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="wrapper">
            <div className="image-element">
              <div className="image-slider-body">
                <div className="image-slider">
                  {data.map(({ id, imgSrc, alt }) => (
                    <img alt={alt} className="image" data-id={id} key={`image${id}`} src={imgSrc} />
                  ))}
                </div>
              </div>
              <div className="right-arrow arrow" onClick={() => handleActiveSlide(0)}>
                &#8594;
              </div>
              <div className="left-arrow arrow" onClick={() => handleActiveSlide(1)}>
                &#8592;
              </div>
            </div>
            <div className="dots">
              {data.map((_, index) => (
                <div
                  className={`dot ${index === activeSlide && 'active'}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;

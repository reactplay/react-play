import React, { useEffect, useRef, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);
  useEffect(() => {
    if (imageUrl && imageRef.current) {
      const imageElement = imageRef.current;
      const handleImageLoad = () => {
        imageElement.scrollIntoView({ behavior: 'smooth' });
      };

      imageElement.addEventListener('load', handleImageLoad);

      return () => {
        imageElement.removeEventListener('load', handleImageLoad);
      };
    }
  }, [imageUrl]);

  return <div>{imageUrl && <img alt="a dog" ref={imageRef} src={imageUrl} />}</div>;
};

export default DogPicture;

import katieZaferesImg from '../assets/images/katie-zaferes.png';
import weddingImage from '../assets/images/wedding-photography.png';
import mountainBikeImage from '../assets/images/mountain-bike.png';
import starImage from '../assets/images/star.png';
import { useState } from 'react';

export default function Card(props) {
  const [openSpots, setOpenSpots] = useState(props.openSpots);
  const [location, setLocation] = useState(props.location);

  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  let cardImg;
  if (props.coverImg === 'katie-zaferes.png') {
    cardImg = katieZaferesImg;
  } else if (props.coverImg === 'wedding-photography.png') {
    cardImg = weddingImage;
  } else if (props.coverImg === 'mountain-bike.png') {
    cardImg = mountainBikeImage;
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={cardImg} />
      <div className="card--stats">
        <img className="card--star" src={starImage} />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

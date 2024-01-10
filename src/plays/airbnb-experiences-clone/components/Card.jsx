import { useMemo } from 'react';
import katieZaferesImg from '../assets/images/katie-zaferes.png';
import weddingImage from '../assets/images/wedding-photography.png';
import mountainBikeImage from '../assets/images/mountain-bike.png';
import starImage from '../assets/images/star.png';

export default function Card(props) {
  const badgeText = useMemo(() => {
    if (props.openSpots === 0) {
      return 'SOLD OUT';
    } else if (props.location === 'Online') {
      return 'ONLINE';
    }

    return null;
  }, [props.openSpots, props.location]);

  const cardImg = useMemo(() => {
    if (props.coverImg === 'katie-zaferes.png') {
      return katieZaferesImg;
    } else if (props.coverImg === 'wedding-photography.png') {
      return weddingImage;
    } else if (props.coverImg === 'mountain-bike.png') {
      return mountainBikeImage;
    }

    return null;
  }, [props.coverImg]);

  const altText = useMemo(() => {
    if (props.coverImg === 'katie-zaferes.png') {
      return 'Katie Zaferes';
    } else if (props.coverImg === 'wedding-photography.png') {
      return 'Woman wearing a white gown';
    } else if (props.coverImg === 'mountain-bike.png') {
      return 'Mountain bike';
    }

    return null;
  }, [props.coverImg]);

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img alt={altText} className="card--image" src={cardImg} />
      <div className="card--stats">
        <img alt="Star image" className="card--star" src={starImage} />
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

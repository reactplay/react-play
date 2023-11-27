import React from 'react';
import { ReactComponent as Flower } from 'images/icon-flower.svg';

const HomeBanner = () => {
  return (
    <div className="home-bg-graphics">
      <Flower className="home-bg-graphics-sm" />
      <Flower className="home-bg-graphics-rg" />
      <Flower className="home-bg-graphics-lg" />
    </div>
  );
};

export default HomeBanner;

import React from 'react';

import {
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
  Element4,
  Element3,
  Element2,
  Element1
} from '../styled-components';

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
const Gallows = [Element4, Element3, Element2, Element1];

interface DrawingProps {
  numberOfGuesses: number;
}

export default function Drawing({ numberOfGuesses }: DrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BodyParts.slice(0, numberOfGuesses).map((Component, id) => (
        <Component key={id} />
      ))}
      {Gallows.map((Component, id) => (
        <Component key={id} />
      ))}
    </div>
  );
}

import { OrbitControls } from '@react-three/drei';
import { FadingDisplacement } from './FadingDisplacement';
import { FadingImage } from './FadingImage';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingDisplacement position-x={1.5} position-z={-2} />
      <FadingImage position-x={-1.5} />
    </>
  );
};

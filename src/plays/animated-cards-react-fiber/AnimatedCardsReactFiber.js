import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

// WARNING: Do not change the entry componenet name
function AnimatedCardsReactFiber(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
            <color args={['#ececec']} attach="background" />
            <Experience />
          </Canvas>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default AnimatedCardsReactFiber;

import { shaderMaterial, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  },
  /* glsl*/ ` 
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,
  /* glsl*/ ` 
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform sampler2D tex2;
        uniform sampler2D disp;
        uniform float _rot;
        uniform float dispFactor;
        uniform float effectFactor;
        void main() {
            vec2 uv = vUv;
            vec4 disp = texture2D(disp, uv);
            vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
            vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
            vec4 _texture = texture2D(tex, distortedPosition);
            vec4 _texture2 = texture2D(tex2, distortedPosition2);
            vec4 finalTexture = mix(_texture, _texture2, dispFactor);
            gl_FragColor = finalTexture;
            #include <tonemapping_fragment>
            #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });

export const FadingDisplacement = (props) => {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([
    '/textures/portrait2.jpg',
    '/textures/full_body2.jpg',
    '/textures/displacement/11.jpg'
  ]);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.055);
  });

  return (
    <mesh {...props} onPointerOut={(e) => setHover(false)} onPointerOver={(e) => setHover(true)}>
      <planeGeometry args={[2.25, 4]} />
      <imageFadeMaterial
        disp={dispTexture}
        ref={ref}
        tex={texture1}
        tex2={texture2}
        toneMapped={false}
      />
    </mesh>
  );
};

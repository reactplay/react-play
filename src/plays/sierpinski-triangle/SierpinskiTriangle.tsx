import React, { useState } from 'react';
import Sketch from 'react-p5';
import P5 from 'p5';
import { Triangle } from './Triangle';
import { getMidPoint } from './utils';
import PlayHeader from 'common/playlists/PlayHeader';
import { level, multiplier } from './constants';

const SierpinskiTriangle = (props: any) => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const [width, height] = windowSize;

  // recursive sierpinski triangle func
  const drawSierpinskiTriangle = (p: P5, triangle: Triangle, depth: number) => {
    // base case
    if (depth === level) return;

    const midPoint1 = getMidPoint(p, triangle.p1, triangle.p2);
    const midPoint2 = getMidPoint(p, triangle.p2, triangle.p3);
    const midPoint3 = getMidPoint(p, triangle.p3, triangle.p1);

    const t0 = new Triangle(midPoint1, midPoint2, midPoint3);

    t0.draw(p);

    const triangle1 = new Triangle(triangle.p1, midPoint1, midPoint3);
    const triangle2 = new Triangle(triangle.p2, midPoint1, midPoint2);
    const triangle3 = new Triangle(triangle.p3, midPoint2, midPoint3);

    drawSierpinskiTriangle(p, triangle1, depth + 1);
    drawSierpinskiTriangle(p, triangle2, depth + 1);
    drawSierpinskiTriangle(p, triangle3, depth + 1);
  };

  const setup = (p: P5, canvasParentref: Element) => {
    p.createCanvas(width * multiplier, height * multiplier).parent(canvasParentref);

    // Stops p5.js from continuously executing the code within draw().
    p.noLoop();
  };

  const draw = (p: P5) => {
    // canvas size
    const canvasWidth = width * multiplier;
    const canvasHeight = height * multiplier;

    p.background(222, 222, 222);
    // create initial vectors
    const p1 = p.createVector(canvasWidth / 2, 0);
    const p2 = p.createVector(0, canvasHeight);
    const p3 = p.createVector(canvasWidth, canvasHeight);

    const triangle = new Triangle(p1, p2, p3);
    triangle.draw(p);

    drawSierpinskiTriangle(p, triangle, 0);
  };
  //
  const updateWindowSize = (p: P5) => {
    p.resizeCanvas(width * multiplier, height * multiplier);
    setWindowSize([p.windowWidth, p.windowHeight]);
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <Sketch
          className="flex items-center justify-center"
          draw={draw}
          setup={setup}
          windowResized={updateWindowSize}
        />
      </div>
    </div>
  );
};

export default SierpinskiTriangle;

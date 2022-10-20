import React from "react";
import Sketch from "react-p5";
import P5 from "p5";
import { Triangle } from "./Triangle";
import { getMidPoint } from "./utils";
import PlayHeader from "common/playlists/PlayHeader";

const SierpinskiTriangle = (props: any) => {
  const level: number = 6;
  const multiplier = 0.7;

  // recursive sierpinski triangle func
  const drawSierpinskiTriangle = (p: P5, t: Triangle, depth: number) => {
    // base case
    if (depth === level) {
      return;
    }

    const m1 = getMidPoint(p, t.p1, t.p2);
    const m2 = getMidPoint(p, t.p2, t.p3);
    const m3 = getMidPoint(p, t.p3, t.p1);

    const t0 = new Triangle(m1, m2, m3);

    t0.draw(p);

    const t1 = new Triangle(t.p1, m1, m3);
    const t2 = new Triangle(t.p2, m1, m2);
    const t3 = new Triangle(t.p3, m2, m3);

    drawSierpinskiTriangle(p, t1, depth + 1);
    drawSierpinskiTriangle(p, t2, depth + 1);
    drawSierpinskiTriangle(p, t3, depth + 1);
  };

  const setup = (p: P5, canvasParentref: Element) => {
    p.createCanvas(
      p.windowWidth * multiplier,
      p.windowHeight * multiplier
    ).parent(canvasParentref);

    // Stops p5.js from continuously executing the code within draw().
    p.noLoop();
  };

  const draw = (p: P5) => {
    // canvas size
    const canvasWidth = p.windowWidth * multiplier;
    const canvasHeight = p.windowHeight * multiplier;

    p.background(222, 222, 222);
    // create initial vectors
    const p1 = p.createVector(canvasWidth / 2, 0);
    const p2 = p.createVector(0, canvasHeight);
    const p3 = p.createVector(canvasWidth, canvasHeight);

    const t0 = new Triangle(p1, p2, p3);
    t0.draw(p);

    drawSierpinskiTriangle(p, t0, 0);
  };
  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body simple-live-chat">
        <Sketch
          className="flex items-center justify-center"
          setup={setup}
          draw={draw}
        />
      </div>
    </div>
  );
};
export default SierpinskiTriangle;

